/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomeScreens from './src/screens/HomeScreens';
function App() {

  return (
      <GestureHandlerRootView style={{ flex: 1, backgroundColor:'#090c2a' }}>
        <HomeScreens/>
      </GestureHandlerRootView>

  );
}

export default App;
