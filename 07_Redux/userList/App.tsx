/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/Home';
import AddUserButton from './src/components/AddUserButton'
// import { Alert } from 'react-native';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen/>
        <AddUserButton/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;