/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MapScreen from './src/screens/MapScreen';

function App() {

  return (
    <SafeAreaProvider>
      <MapScreen/>
    </SafeAreaProvider>
  );
}




export default App;
