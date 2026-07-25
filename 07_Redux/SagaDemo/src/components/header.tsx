import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeaderTop() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Saga Cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});