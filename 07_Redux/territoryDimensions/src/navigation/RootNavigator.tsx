import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

import TabBar from './tabbar';


const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const isLogin = useSelector(state => state.auth.isLogin);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogin ? (
          <Stack.Screen name="Main" component={TabBar} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            {/* <Stack.Screen name="Signup" component={SignupScreen} /> */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

