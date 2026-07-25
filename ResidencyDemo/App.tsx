/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import BottomTabs from '@src/navigation/BottomTabComponents/BottomTabs';

function App(){

  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;  
