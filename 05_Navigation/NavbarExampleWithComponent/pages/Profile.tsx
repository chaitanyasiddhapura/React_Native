import React from 'react';
import { View, Text } from 'react-native';
import Navbar from '../components/Navbar';
import styles from '../assets/styles/profileStyle'
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Navbar title="Profile" isBackButton={true} />
      <View style={styles.mainView}>
        <Text>Profile Screen</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;