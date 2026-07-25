import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { Image, View } from 'react-native';

import Home from '../screens/Home';
import Profile from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabBar() {
  const isDark = useSelector(state => state.theme.isDark);

  const colors = {
    background: isDark ? '#0f172a' : '#ffffff',
    active: '#38bdf8',
    inactive: isDark ? '#94a3b8' : '#64748b',
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 10,
        },

        tabBarActiveTintColor: colors.active,
        tabBarInactiveTintColor: colors.inactive,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return (
              <Image
                source={require('../assets/images/dashboard.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: color, 
                }}
                resizeMode="contain"
              />
            );
          }

          if (route.name === 'Profile') {
            return (
              <Image
                source={require('../assets/images/user.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: color, 
                }}
                resizeMode="contain"
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
