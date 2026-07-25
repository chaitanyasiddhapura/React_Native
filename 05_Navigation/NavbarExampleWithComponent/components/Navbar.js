import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/styles/navbarStyle'

const Navbar = ({ title, isBackButton }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={styles.container}>
        {isBackButton ? (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.placeholder} />
        )}

        <Text style={styles.title}>{title}</Text>
        <View style={styles.placeholder} />
      </View>
    </SafeAreaView>
  );
};


export default Navbar;