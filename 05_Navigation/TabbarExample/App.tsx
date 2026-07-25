/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import Profile from './pages/Profile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MovieStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movie List" component={MovieList} />
      <Stack.Screen name="Details" component={MovieDetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Movies" component={MovieStack} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}