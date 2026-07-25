/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Hello Chaitanya</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'center',   
    alignItems: 'center',  
    flexWrap: 'wrap',     
  },
  ImagesStyle: {
    height: 100,
    width: 100,
    borderRadius: 10,
    margin: 5
  }
});