/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.WeddingdayPersonalUse}>
            This is the Weddingday Personal Use font
          </Text>
          <Text style={styles.DroplineRegularWpegz}>
            This is the DroplineRegular-Wpegz font
          </Text>
          <Text style={styles.Freedom10eM}>
            This is the Freedom-10eM font
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  
  WeddingdayPersonalUse: {
    fontFamily: "Weddingday Personal Use",
    fontSize: 50,
  },

  DroplineRegularWpegz: {
    fontFamily: "DroplineRegular-Wpegz",
    fontSize: 50,
  },

  Freedom10eM: {
    fontFamily: "Freedom-10eM",
    fontSize: 28,
  },
});