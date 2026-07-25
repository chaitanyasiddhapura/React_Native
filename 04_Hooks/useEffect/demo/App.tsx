/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert, Button,} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';

export default function App(){
  const [name, setName] = useState('Chaitanya'); 
  const [count, setCount] = useState(0);   

  
  useEffect(() => {
    Alert.alert('Welcome!', `Hello ${name} How are you`);
  }, []); 

  useEffect(() => {
    if (count > 0) { 
      Alert.alert('Button Clicked!', `You clicked ${count} times.`);
    }
  }, [count]); 

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Hello {name}!</Text>
      <Button title="Click Me" onPress={() => setCount(count + 1)} />
      <Button title="Change Name" onPress={() => setName('Siddhapura')} />
    </View>
  );

}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F0F8FF' 
  },
  text: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
});
