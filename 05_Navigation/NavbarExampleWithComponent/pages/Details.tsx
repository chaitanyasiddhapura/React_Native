import React from 'react';
import { View, Text, Button } from 'react-native';
import Navbar from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/styles/detailsPageStyle'

const DetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Navbar title="Details" isBackButton={true} />
      <View style={styles.mainView}>
        <Text>Details Screen</Text>
        <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
      </View>
    </View>
  );
};

export default DetailsScreen;