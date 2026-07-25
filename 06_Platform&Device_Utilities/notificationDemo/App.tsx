/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import PhotoGallery from './src/screens/PhotoGallery';

import { navigationRef } from './src/navigations/navigationRef';
import { registerNotificationEvents } from './src/notifications/notificationHandler';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    registerNotificationEvents();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PhotoGallery" component={PhotoGallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;