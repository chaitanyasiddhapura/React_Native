import Realm from 'realm';
import ContactModel from '../realm/schemas/ContactModel';
import Contacts from 'react-native-contacts';

// 🔹 Initialize Realm with proper schema and migration handling
const realm = new Realm({
  schema: [ContactModel],
  schemaVersion: 3, // increment if schema changes
  migration: (oldRealm, newRealm) => {
    if (oldRealm.schemaVersion < 2) {
      const oldObjects = oldRealm.objects('Contact');
      const newObjects = newRealm.objects('Contact');
      for (let i = 0; i < oldObjects.length; i++) {
        newObjects[i].deviceId = oldObjects[i].deviceId?.toString() || '';
      }
    }
  },
});

const ContactDB = {
  // 🔹 Get all contacts
  getAllContacts: () => {
    try {
      return realm.objects('Contact');
    } catch (e) {
      console.warn('Error fetching contacts:', e);
      return [];
    }
  },

  // 🔹 Add contact (Realm + Device)
  addContact: async (contact) => {
    try {
      // 1️⃣ Add to device
      let deviceId = '';
      try {
        const deviceContact = await Contacts.addContact({
          givenName: contact.name?.toString() || 'No Name',
          phoneNumbers: [
            { label: 'mobile', number: contact.phone?.toString() || '' },
          ],
          emailAddresses: contact.email
            ? [{ label: 'work', email: contact.email?.toString() || '' }]
            : [],
        });
        deviceId = deviceContact?.recordID || '';
      } catch (err) {
        console.warn('Device add error:', err);
      }

      // 2️⃣ Save to Realm
      realm.write(() => {
        realm.create(
          'Contact',
          {
            id: contact.id?.toString() || Date.now().toString(),
            name: contact.name?.toString() || 'No Name',
            phone: contact.phone?.toString() || '',
            email: contact.email?.toString() || '',
            deviceId,
          },
          Realm.UpdateMode.Modified
        );
      });

      return true;
    } catch (err) {
      console.warn('Error adding contact:', err);
      return false;
    }
  },

  // 🔹 Update contact (Realm + Device)
  updateContact: async (id, updatedContact) => {
    try {
      const contactObj = realm.objectForPrimaryKey('Contact', id);
      if (!contactObj) return false;

      // 1️⃣ Update Realm
      realm.write(() => {
        Object.keys(updatedContact).forEach((key) => {
          if (key !== 'id') {
            contactObj[key] = updatedContact[key]?.toString() || '';
          }
        });
      });

      // 2️⃣ Update Device
      if (contactObj.deviceId) {
        try {
          const deviceContact = await Contacts.getContactById(contactObj.deviceId);
          if (deviceContact) {
            await Contacts.updateContact({
              ...deviceContact,
              givenName: updatedContact.name?.toString() || contactObj.name,
              phoneNumbers: [
                {
                  label: 'mobile',
                  number: updatedContact.phone?.toString() || contactObj.phone,
                },
              ],
              emailAddresses: updatedContact.email
                ? [{ label: 'work', email: updatedContact.email?.toString() }]
                : [],
            });
          }
        } catch (err) {
          console.warn('Device update error:', err);
        }
      }

      return true;
    } catch (err) {
      console.warn('Error updating contact:', err);
      return false;
    }
  },

  // 🔹 Delete contact (Realm + Device)
// deleteContact: async (id) => {
//   try {
//     const contactObj = realm.objectForPrimaryKey('Contact', id);
//     if (!contactObj) return false;

//     const deviceId = contactObj.deviceId;

//     // 1️⃣ Delete from Realm immediately (UI updates)
//     realm.write(() => {
//       realm.delete(contactObj);
//     });

//     // 2️⃣ Delete from Device asynchronously (don't block UI)
//     if (deviceId) {
//       Contacts.getContactById(deviceId)
//         .then((deviceContact) => {
//           if (deviceContact) {
//             Contacts.deleteContact(deviceContact).catch((err) =>
//               console.warn('Device delete error:', err)
//             );
//           }
//         })
//         .catch((err) => console.warn('Device delete error:', err));
//     }

//     return true;
//   } catch (err) {
//     console.warn('Error deleting contact:', err);
//     return false;
//   }
// },
  
deleteContact: async (id) => {
  try {
    const contactObj = realm.objectForPrimaryKey('Contact', id);
    if (!contactObj) return false;

    // ✅ Store values BEFORE deleting (important)
    const deviceId = contactObj.deviceId;
    const phone = (contactObj.phone || '').replace(/\D/g, '');

    // 1️⃣ Delete from Realm (UI updates instantly)
    realm.write(() => {
      realm.delete(contactObj);
    });

    // 2️⃣ Delete from device safely
    try {
      let deviceContact = null;

      // 🔹 Try using deviceId first
      if (deviceId) {
        try {
          deviceContact = await Contacts.getContactById(deviceId);
        } catch (e) {
          console.warn('DeviceId lookup failed');
        }
      }

      // 🔹 Fallback: find by phone number
      if (!deviceContact && phone) {
        const allContacts = await Contacts.getAll();

        deviceContact = allContacts.find(c => {
          const p = (c.phoneNumbers[0]?.number || '').replace(/\D/g, '');
          return p === phone;
        });
      }

      // 🔹 Delete if found
      if (deviceContact) {
        await Contacts.deleteContact(deviceContact);
        console.log('✅ Deleted from device');
      } else {
        console.log('⚠️ Contact not found on device');
      }

    } catch (err) {
      console.warn('Device delete error:', err);
    }

    return true;

  } catch (err) {
    console.warn('Error deleting contact:', err);
    return false;
  }
},

// 🔹 Delete all contacts (Realm only)
  deleteAll: () => {
    try {
      realm.write(() => {
        realm.deleteAll();
      });
    } catch (e) {
      console.warn('Error deleting all contacts:', e);
    }
  },
};

export default ContactDB;