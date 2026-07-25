import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';

// import { ThemeContext } from '../context/ThemeContext';
const Tab = createBottomTabNavigator();

const tabIcons: any = {
  DashboardScreen: require('../assets/Images/dashboard.png'),
  ProfileScreen: require('../assets/Images/user.png'),
};

const TabNavigator = () => {
//   const { isEnabled } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 70,
        },

        tabBarIcon: ({ focused }) => (
          <Image
            source={tabIcons[route.name]}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? '#7bc6ff' : 'black',
            }}
          />
        ),
      })}
    >
      <Tab.Screen name="DashboardScreen" component={DashboardScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;