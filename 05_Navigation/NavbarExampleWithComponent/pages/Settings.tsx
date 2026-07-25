import React from 'react';
import { View, Text } from 'react-native';
import Navbar from '../components/Navbar';
import styles from '../assets/styles/settingStyle'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Navbar title="Settings" isBackButton={true} />
      <View style={styles.mainView}>
        <Text>Settings Screen</Text>
      </View>
    </View>
  );
};

export default SettingsScreen;