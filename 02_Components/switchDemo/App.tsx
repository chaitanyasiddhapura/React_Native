/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState, useEffect} from 'react';
import { Switch, Text, View } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import  SwitchComponent  from './src/component/switch';

import styles from './src/assets/css/mainPage'

function App(){ 
  const [isEnabled, setIsEnabled] = useState(false);
  const mode = isEnabled ? "Dark Mode" : "Light Mode";


  useEffect(() => {
    const loadMode = async () => {
      try {
        const savedMode = await AsyncStorage.getItem('isEnabled');
        if (savedMode !== null) {
          setIsEnabled(JSON.parse(savedMode));
        }
      } catch (e) {
        console.log("Failed to load mode", e);
      }
    };
    loadMode();
  }, []);

  
  const toggleSwitch = async () => {
    try {
      const newValue = !isEnabled;
      setIsEnabled(newValue);
      await AsyncStorage.setItem('isEnabled', JSON.stringify(newValue));
    } catch (e) {
      console.log("Failed to save mode", e);
    }
  };

  return(
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, {backgroundColor: isEnabled ? "black" : "white"} ]}>
        <View style={styles.centerBox}>
          <Text style={{color: isEnabled ? "white": "black", fontSize: 22 }}>{mode}</Text>
          <Switch
            trackColor={{ false: "#5ecadb", true: "#5c5f60" }}
            thumbColor={isEnabled ?  '#b2aaaa' : '#f5dd4b' }
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );

}

export default App;