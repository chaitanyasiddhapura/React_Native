/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
 

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          
          <View style={styles.row}>
            <View style={{flex:2, backgroundColor:"#d24141"}}/>
            <View style={{flex:5, backgroundColor:"#41b0d2"}}/>
          </View>

        
          <View style={styles.row}>
            <View style={{flex:5, backgroundColor:"#e3e340"}}/>
            <View style={{flex:2, backgroundColor:"#d241bf"}}/>
          </View>

          <View style={styles.row}>
            <View style={{flex:1, backgroundColor:"#419fd2"}}/>
          </View>

          <View style={styles.row}>
          <View style={{flex:1, backgroundColor:"#e39440"}}/>
          <View style={{flex:2, gap:20}}>
            <View style={{flex:1, backgroundColor:"#d2ab41"}}/>
            <View style={{flex:1, backgroundColor:"#41d244"}}/>
          </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "space-evenly"
  },

  row:{
    flex: 1,
    flexDirection:"row",
    margin: 10, 
    gap: 10
  },
});