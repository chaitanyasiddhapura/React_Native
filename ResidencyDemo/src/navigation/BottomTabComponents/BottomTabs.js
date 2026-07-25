import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '@screens/HomeScreen';
import ProfileScreen from '@screens/ProfileScreen';
import SettingsScreen from '@screens/SettingScreen';

import {
  TabButton,
  Icon,
  Label,
  ActiveLine,
} from './Styled';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowRadius: 10,
        },
      }}
    >

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton>

              <Icon
                source={require('@assets/icons/settings.png')}
                style={{
                  tintColor: focused ? '#22c55e' : '#9ca3af',
                }}
              />

              <Label
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  color: focused ? '#22c55e' : '#9ca3af',
                }}
              >
                Settings
              </Label>

              <ActiveLine
                style={{
                  backgroundColor: focused
                    ? '#22c55e'
                    : 'transparent',
                }}
              />

            </TabButton>
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton>

              <Icon
                source={require('@assets/icons/home.png')}
                style={{
                  tintColor: focused ? '#22c55e' : '#9ca3af',
                }}
              />

              <Label
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  color: focused ? '#22c55e' : '#9ca3af',
                }}
              >
                Home
              </Label>

              <ActiveLine
                style={{
                  backgroundColor: focused
                    ? '#22c55e'
                    : 'transparent',
                }}
              />

            </TabButton>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton>

              <Icon
                source={require('@assets/icons/profile.png')}
                style={{
                  tintColor: focused ? '#22c55e' : '#9ca3af',
                }}
              />

              <Label
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  color: focused ? '#22c55e' : '#9ca3af',
                }}
              >
                Profile
              </Label>

              <ActiveLine
                style={{
                  backgroundColor: focused
                    ? '#22c55e'
                    : 'transparent',
                }}
              />

            </TabButton>
          ),
        }}
      />

    </Tab.Navigator>
  );
}