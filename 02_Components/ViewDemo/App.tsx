/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';


export default function App(){

  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.SafeContainer}>
        <View style={styles.container}> 
         {/* <Text>Hello</Text> */}
        </View>
      </SafeAreaView>

    </SafeAreaProvider>

  )

}

  const styles = StyleSheet.create({
    SafeContainer: {      
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000000", 
  },  
  container: {
    height: 100,
    width: 100,
    backgroundColor: "#ffffff", 
  }
  })
