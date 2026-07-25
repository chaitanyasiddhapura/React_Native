import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import styles from '../assets/styles/HomeStyle';
import ContactList from '../components/ContectList';
import RealmService from '../services/RealmService';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null); // store contact being edited

  useEffect(() => {
    clearAllContacts();
  }, []);

  const onContactPress = (contact) => {
    setSelectedContact(contact);
    setEditModalVisible(true);
  };

  const clearAllContacts = async () => {
    try {
      RealmService.deleteAll();
      console.log('✅ All contacts deleted from Realm');
    } catch (err) {
      console.warn('❌ Failed to delete contacts:', err);
    }
  };

  // ✅ Add contact from modal input
  const handleAdd = async () => {
    if (!name.trim() || !phone.trim()) {
      alert('Name and phone are required!');
      return;
    }

    try {
      const newContact = {
        id: Date.now().toString(),
        name,
        phone,
        email,
      };

      await RealmService.addContact(newContact);

      console.log('✅ Contact added:', newContact);
      setModalVisible(false);
      setName('');
      setPhone('');
      setEmail('');
    } catch (err) {
      console.warn('Add contact error:', err);
    }
  };

  return (
    <View style={styles.container}>
      <ContactList onContactPress={onContactPress} />

      <TouchableOpacity style={styles.addBtn} onPress={() => setModalVisible(true)}>
        <Text style={styles.addOption}> + </Text>
      </TouchableOpacity>

      {/* Modal for adding contact */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Contact</Text>

            <TextInput
              placeholder="Name"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />

            <TextInput
              placeholder="Phone"
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />

            <TextInput
              placeholder="Email (optional)"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button title="Add" onPress={handleAdd} />
            </View>
          </View>
        </View>
      </Modal>
            {/* Edit Contact Modal */}
<Modal
  visible={editModalVisible}
  animationType="slide"
  transparent={true}
  onRequestClose={() => setEditModalVisible(false)}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Edit Contact</Text>

      <TextInput
        placeholder="Name"
        style={styles.input}
        value={selectedContact?.name || ''}
        onChangeText={(text) =>
          setSelectedContact({ ...selectedContact, name: text })
        }
      />

      <TextInput
        placeholder="Phone"
        style={styles.input}
        value={selectedContact?.phone || ''}
        onChangeText={(text) =>
          setSelectedContact({ ...selectedContact, phone: text })
        }
        keyboardType="phone-pad"
      />

      <TextInput
        placeholder="Email (optional)"
        style={styles.input}
        value={selectedContact?.email || ''}
        onChangeText={(text) =>
          setSelectedContact({ ...selectedContact, email: text })
        }
        keyboardType="email-address"
      />

      <View style={styles.modalButtons}>
        <Button
          title="Cancel"
          color="gray"
          onPress={() => setEditModalVisible(false)}
        />
        <Button
          title="Update"
          onPress={async () => {
            try {
              await RealmService.updateContact(
                selectedContact.id,
                selectedContact
              );
              setEditModalVisible(false);
              setSelectedContact(null);
            } catch (err) {
              console.warn('Update error:', err);
            }
          }}
        />
        <Button
          title="Delete"
          color="red"
          onPress={async () => {
            try {
              const id = selectedContact.id;

              setEditModalVisible(false);
              setSelectedContact(null); // ✅ FIX: clear first

              await RealmService.deleteContact(id);
            } catch (err) {
              console.warn('Delete error:', err);
            }
          }}
/>
      </View>
    </View>
  </View>
</Modal>
    </View>
  );
};

export default HomeScreen;