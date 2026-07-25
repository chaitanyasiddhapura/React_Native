import React, { useState, useEffect } from 'react';
import {
  View,
  SectionList,
  Text,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Contacts from 'react-native-contacts';
import RealmService from '../services/RealmService';
import Search from '../components/Search';
import styles from '../assets/styles/ContectListStyle';

type Contact = {
  id: string;
  name: string;
  phone: string;
  email?: string;
};

type Section = {
  title: string;
  data: Contact[];
};

const ContactList = ({ onContactPress }) => {
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    let realmContacts: any;

    const init = async () => {
      try {
        await requestPermission();
        await syncContacts();
        buildSections();

        realmContacts = RealmService.getAllContacts();
        realmContacts.addListener(() => buildSections());
      } catch (err) {
        console.warn(err);
      }
    };

    init();

    return () => {
      if (realmContacts && realmContacts.removeAllListeners) {
        realmContacts.removeAllListeners();
      }
    };
  }, []);

  // Request permissions
  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
      ]);

      if (
        result['android.permission.READ_CONTACTS'] !== PermissionsAndroid.RESULTS.GRANTED ||
        result['android.permission.WRITE_CONTACTS'] !== PermissionsAndroid.RESULTS.GRANTED
      ) {
        throw new Error('Permission denied');
      }
    } else {
      const permission = await Contacts.requestPermission();
      if (permission !== 'authorized') {
        throw new Error('Permission denied');
      }
    }
  };

  // Normalize phone numbers
  const normalizePhone = (phone: string) => phone.replace(/\D/g, '');

  // Safe add contact to device (prevents duplicates)
  const addToDeviceIfNotExists = async (contact: Contact) => {
    const deviceContacts = await Contacts.getAll();

    const exists = deviceContacts.some((c) => {
      const phone = normalizePhone(c.phoneNumbers[0]?.number || '');
      return phone === normalizePhone(contact.phone);
    });

    if (exists) return; // already exists

    await Contacts.addContact({
      givenName: contact.name,
      phoneNumbers: [
        { label: 'mobile', number: contact.phone }
      ],
      emailAddresses: contact.email
        ? [{ label: 'work', email: contact.email }]
        : [],
    });
  };

  // Sync device contacts with Realm safely
  const syncContacts = async () => {
    try {
      const deviceContacts = await Contacts.getAll();
      const realmContacts = [...RealmService.getAllContacts()];

      const realmPhoneMap: { [phone: string]: Contact } = {};
      realmContacts.forEach(c => {
        const phone = normalizePhone(c.phone || '');
        if (phone) realmPhoneMap[phone] = c;
      });

      // Add or update contacts
      for (const d of deviceContacts) {
        const phone = normalizePhone(d.phoneNumbers[0]?.number || '');
        if (!phone) continue;

        const name = `${d.givenName || ''} ${d.familyName || ''}`.trim() || 'No Name';
        const email = d.emailAddresses[0]?.email || '';

        const existing = realmPhoneMap[phone];

        if (!existing) {
          // Add to Realm
          await RealmService.addContact({
            id: phone,
            name,
            phone,
            email,
            deviceId: phone,
          });
        } else if (existing.name !== name || existing.email !== email) {
          // Update Realm if changed
          await RealmService.updateContact(existing.id, { name, phone, email });
        }
      }

      // Delete removed contacts from Realm
      const devicePhones = deviceContacts.map(c => normalizePhone(c.phoneNumbers[0]?.number || ''));
      for (const r of realmContacts) {
        const phone = normalizePhone(r.phone || '');
        if (phone && !devicePhones.includes(phone)) {
          await RealmService.deleteContact(r.id);
        }
      }

      console.log('✅ Sync complete (no duplicates)');
    } catch (err) {
      console.warn('Sync error:', err);
    }
  };

  // Build sections for SectionList
  const buildSections = (data?: Contact[]) => {
    // const contacts = data || [...RealmService.getAllContacts()];
    const contacts = data
      ? data
      : RealmService.getAllContacts().map(c => ({
          id: c.id,
          name: c.name,
          phone: c.phone,
          email: c.email,
    }));

    const grouped: { [key: string]: Contact[] } = {};
    contacts.forEach(c => {
      const letter = c.name?.charAt(0).toUpperCase() || '#';
      if (!grouped[letter]) grouped[letter] = [];
      grouped[letter].push(c);
    });

    const sectionArray: Section[] = Object.keys(grouped)
      .sort()
      .map(key => ({
        title: key,
        data: grouped[key].sort((a, b) => a.name.localeCompare(b.name)),
      }));

    setSections(sectionArray);
  };

  // Search handler
  const handleSearch = (text: string) => {
    // const allContacts = [...RealmService.getAllContacts()];
    const allContacts = RealmService.getAllContacts().map(c => ({
      id: c.id,
      name: c.name,
      phone: c.phone,
      email: c.email,
    }));

    if (!text.trim()) {
      buildSections(allContacts);
      return;
    }

    const normalizedSearch = normalizePhone(text);
    const filtered = allContacts.filter(c => {
      const nameMatch = c.name.toLowerCase().includes(text.toLowerCase());
      const phoneMatch = normalizePhone(c.phone).includes(normalizedSearch);
      return nameMatch || phoneMatch;
    });

    buildSections(filtered);
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <Search onSearch={handleSearch} />

      {/* Contact List */}
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItems}
            onPress={() => onContactPress(item)} 
          >
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {item.name.charAt(0).toUpperCase()}
              </Text>
            </View>
            <Text style={styles.contactName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />

    </View>
  );
};

export default ContactList;