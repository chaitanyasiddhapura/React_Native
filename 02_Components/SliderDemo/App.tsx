/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <View style={styles.main}>

          <Slider
            style={{width: 300}}
            step={1}
            minimumValue={0}
            maximumValue={100}
            value={10}
            minimumTrackTintColor="#81ed69"
            maximumTrackTintColor="#d0cfcf"
            thumbTintColor="#a1ba97"
          />

          <Slider
            style={{width: 300, height: 40}}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#ffffff"
            value={40}
      
          />

          <Slider
            style={{width: 300, height: 40}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            thumbTintColor="#000000"
            value={40}
            disabled
          />

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;