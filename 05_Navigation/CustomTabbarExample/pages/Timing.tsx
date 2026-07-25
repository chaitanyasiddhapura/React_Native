import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Timing() {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Welcome, Timing Page</Text>
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

export default Timing;