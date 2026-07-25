/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import { StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView,} from 'react-native-safe-area-context';
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import Home from "./src/Screens/Home";

function App(){

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </Provider>
    </SafeAreaProvider>
  );
}


export default App;
