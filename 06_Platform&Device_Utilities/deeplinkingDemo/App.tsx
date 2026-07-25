/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Text, View, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// 🏠 Home Screen
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

// 👤 Profile Screen
function ProfileScreen({ route }) {
  const { id } = route.params || {};

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      <Text>User ID: {id}</Text>
    </View>
  );
}

export default function App() {

  // 👇 Optional: log incoming links
  useEffect(() => {
    Linking.getInitialURL().then(url => {
      if (url) console.log('Opened from quit:', url);
    });

    const sub = Linking.addEventListener('url', ({ url }) => {
      console.log('Opened while running:', url);
    });

    return () => sub.remove();
  }, []);

  // 🔗 Deep linking config
  const linking = {
    prefixes: ['myapp://'],
    config: {
      screens: {
        Home: 'home',
        Profile: 'profile/:id',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}