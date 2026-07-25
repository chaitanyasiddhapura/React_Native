/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import {Image ,Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './pages/home' 
import AboutScreen from './pages/about' 


const Stack = createNativeStackNavigator();



function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./asset/1.png')}
    />
  );
}

function App() {


  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home Screen',
              headerStyle: { backgroundColor: 'tomato' },
              headerRight: () => (
                <Button 
                title='Show Alert'
                onPress={() => alert('You Click Me')}
                />
            ),
            }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            
            options={({ route }) => ({
              title: route.params?.name,
              // headerTitle: (props) => <LogoTitle {...props} />,
              headerRight: () =>  <Button title='Update count'/>,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;