/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider, SafeAreaView,} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/app/store'

import HeaderTop from './src/components/header';
import Card from './src/components/card';

function Main(){

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderTop />
      <Card />
    </SafeAreaView>
  )
}

function App(){
  return(
    <SafeAreaProvider>
      <Provider store={store}>
        <Main/>
      </Provider>
    </SafeAreaProvider>
  )


}

export default App;
