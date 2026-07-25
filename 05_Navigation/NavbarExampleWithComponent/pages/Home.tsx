import React from 'react';
import { View, Text, Button } from 'react-native';
import Navbar from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/styles/HomeStyle'

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Navbar title="Home" isBackButton={false} />
      <View style={styles.mainView}>
        <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
        <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      </View>
    </View>
  );
};

export default HomeScreen;