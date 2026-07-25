import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity } from 'react-native';

interface EditProfileModalProps {
  visible: boolean;
  onClose: () => void;
  user: {
    name: string;
    email: string;
  };
  onSave: (updatedUser: { name: string; email: string }) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ visible, onClose, user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  const handleSave = () => {
    onSave({ name, email });
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={{ width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
          <Text>Edit Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <Text>Edit Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={{ borderBottomWidth: 1, marginBottom: 20 }}
          />

          <TouchableOpacity onPress={handleSave} style={{ marginBottom: 10 }}>
            <Text style={{ color: 'blue' }}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
            <Text style={{ color: 'red' }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EditProfileModal;