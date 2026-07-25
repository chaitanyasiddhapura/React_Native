import React, {useContext} from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Search from '../screens/search';
import Notification from '../screens/Notification';
import { ThemeContext } from '../context/ThemeContext';

const Tab = createBottomTabNavigator();

const tabIcons: any = {
  Home: require('../assets/Images/icons/home.png'),
  Search: require('../assets/Images/icons/search.png'),
  Notification: require('../assets/Images/icons/notification.png'),
};

const TabNavigator = () => {
  const { isEnabled } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          // backgroundColor: 'white',
          backgroundColor: isEnabled ? "#000000" : "#ffffff",
          height: 70,
        },

        tabBarIcon: ({ focused }) => (
          <Image
            source={tabIcons[route.name]}
            style={{
              width: 24,
              height: 24,
              // tintColor: focused ? '#3f73a1' : 'gray',
              tintColor: focused
                ? (isEnabled ?  "#ffffff": "#3F51B5" )
                : (isEnabled ? "#3F51B5" : "#5c5c5c"),
            }}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  );
};

export default TabNavigator;