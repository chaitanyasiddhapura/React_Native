/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import { View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
// import styles from './src/assets/css/appStyle'

import BasicAnimation from './src/screens/BasicAnimation';

function App(){

  return (
    <SafeAreaProvider>
     
        <BasicAnimation/>
      
    </SafeAreaProvider>
  );
}


export default App;
