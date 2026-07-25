import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Chaitanya</Text>
      <Text>Here the your details</Text>
      <Text>Name: Chaitanya</Text>
      <Text>Mob No: 1234567890</Text>
      <Text>Current Plan: Active</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10
  }
});

export default Profile;