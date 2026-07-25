import React, { useState, useMemo } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import styles from '../assets/css/ProfilePage';
import useAuth from '../hooks/useAuth';
import EditProfileModal from '../components/EditProfileModal';

const ProfileScreen = () => {
  const { user, setUser, logout } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);

  const profileImage = useMemo(() => user.name.slice(0, 1).toUpperCase(), [user.name]);

  const handleSave = (updatedUser: { name: string; email: string }) => {
    setUser(updatedUser);
    Alert.alert('Success', 'Profile updated successfully!');
  };

  return (
    <View style={styles.content}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>{profileImage}</Text>
        </View>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>

      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem} onPress={() => setModalVisible(true)}>
          <Text style={styles.menuItemText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Privacy Settings</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      <EditProfileModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        user={user}
        onSave={handleSave}
      />
    </View>
  );
};

export default ProfileScreen;