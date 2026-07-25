/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import Profile from './pages/Profile';
import Gym from './pages/GymPage';
import Timing from './pages/Timing';
import Verify from './pages/VerifyPage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MovieStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MovieList" component={MovieList} />
      <Stack.Screen name="Details" component={MovieDetails} />
    </Stack.Navigator>
  );
}

const tabIcons = {
  Movies: require('./asset/icons/Home.png'),
  Profile: require('./asset/icons/profile.png'),
  Gym: require('./asset/icons/gym.png'),
  Timing: require('./asset/icons/stopwatch.png'),
  Verify: require('./asset/icons/Verify.png'),
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,

          tabBarStyle: {
            position: 'absolute',
            marginHorizontal: 1,
            backgroundColor: 'white',
            borderRadius: 15,
            height: 70,
            elevation: 5,
            shadowColor: '#000000',
            shadowOffset: { width: 10, height: 10 },
            shadowOpacity: 0.25,
            shadowRadius: 10,
          },

          tabBarItemStyle: {
            justifyContent: 'center',
            alignItems: 'center',
          },

          tabBarIconStyle: {
            marginTop: 5,
          },

          tabBarIcon: ({ focused }) => (
            <Image
              source={tabIcons[route.name]}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#3f73a1' : 'gray',
              }}
              resizeMode="contain"
            />
          ),
        })}
      >
        <Tab.Screen
          name="Movies"
          component={MovieStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Gym" component={Gym} />
        <Tab.Screen name="Timing" component={Timing} />
        <Tab.Screen name="Verify" component={Verify} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}