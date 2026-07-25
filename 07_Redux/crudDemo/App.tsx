/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import {SafeAreaProvider, SafeAreaView,} from 'react-native-safe-area-context';

function App(){

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Hello</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
