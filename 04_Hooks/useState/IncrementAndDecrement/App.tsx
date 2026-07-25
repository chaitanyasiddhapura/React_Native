/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
 const [value, updatevalue] = useState(0);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Counter: {value}</Text>
        <View style={styles.btn}>
          <Button
            title="Increment"
            color="#4CAF50"
            onPress={()=>{updatevalue(value => value + 1);updatevalue(value => value + 1);updatevalue(value => value + 1);updatevalue(value => value + 1)}}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Decrement"
            color="#F44336"
            onPress={() => {updatevalue(value - 1)}}
          />
        </View>
        <View style={styles.btn}>
          <Button title="Clear" onPress={() => updatevalue(0)} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// function Increment(){
//   updatevalue(value + 1)
//   updatevalue(value + 1)
//   updatevalue(value + 1)
//   updatevalue(value + 1)
// }


// function Decrement(){
//   updatevalue(value - 1)
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },

  btn: {
    height: 40,
    width: 200,
  },
});
