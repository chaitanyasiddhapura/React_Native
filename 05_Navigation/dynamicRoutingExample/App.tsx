/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import {  SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen
              name="Movies"
              component={MovieList}
              options={{ title: "Movie List" }}
            />

            <Stack.Screen
              name="Details"
              component={MovieDetails}
              options={{ title: "Movie Details" }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
