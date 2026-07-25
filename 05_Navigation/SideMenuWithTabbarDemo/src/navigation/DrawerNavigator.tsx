import React, { useContext } from 'react';
import { Text, Image, View, TouchableOpacity, Switch } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import Profile from '../screens/SidebarScreen/Profile';
import Setting from '../screens/SidebarScreen/Setting';
import Help from '../screens/SidebarScreen/Help';
import Privacy from '../screens/SidebarScreen/Privacy';

import { ThemeContext } from '../context/ThemeContext';
import DrawerStyles from '../assets/css/DrawerNavigator';

const Drawer = createDrawerNavigator();


// Drawer Label Function
const getDrawerLabel = (label, isEnabled) => ({ focused }) => (
  <Text
    style={[
      DrawerStyles.label,
      {
        color: focused
          ? (isEnabled ? "#ffffff" : "#3F51B5")
          : (isEnabled ? "#fafafa" : "#000000"),
        fontWeight: focused ? 'bold' : 'normal'
      }
    ]}
  >
    {label}
  </Text>
);


// Custom Drawer UI
const CustomDrawer = (props) => {

  const { isEnabled, toggleSwitch } = useContext(ThemeContext);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: isEnabled ? "#000000" : "#ffffff"
      }}
    >

      {/* Header */}
      <View style={DrawerStyles.header}>
        <Image
          source={require('../assets/Images/profile.png')}
          style={DrawerStyles.profile}
        />

        <Text style={DrawerStyles.name}>Chaitanya Siddhapura</Text>

        <View style={DrawerStyles.locationContainer}>
          <Image
            source={require('../assets/Images/icons/location-pin.png')}
            style={{ height: 12, width: 12, tintColor: '#fff' }}
          />
          <Text style={DrawerStyles.location}>India</Text>
        </View>
      </View>

      {/* Drawer Menu */}
      <View style={DrawerStyles.menuContainer}>
        <DrawerItemList {...props} />
      </View>

      <View style={DrawerStyles.divider} />

      {/* Dark Mode Switch */}
      <View style={DrawerStyles.mode}>
        <Text style={{ fontSize: 16, color: isEnabled ? "#ffffff" : "#5c5f60" }}>
          Change the mode
        </Text>

        <Switch
          trackColor={{ false: "#5ecadb", true: "#5c5f60" }}
          thumbColor={isEnabled ? '#b2aaaa' : '#f5dd4b'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      {/* Logout */}
      <View style={DrawerStyles.logoutContainer}>
        <Image
          source={require('../assets/Images/icons/logout.png')}
          style={{ height: 20, width: 20, tintColor: '#777' }}
        />
        <Text style={DrawerStyles.logoutText}>Log Out</Text>
      </View>

    </DrawerContentScrollView>
  );
};



// Drawer Navigator
const DrawerNavigator = () => {

  const { isEnabled } = useContext(ThemeContext);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={({ navigation }) => ({

        headerShown: true,
        headerTitle: '',
        headerStyle: {
            backgroundColor: isEnabled ? "#191919" : "#ffffff"
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 15 }}
          >
            <Image
              source={require('../assets/Images/icons/menus.png')}
              style={{ height: 30, width: 30, tintColor: isEnabled ? '#ffffff' : '#3F51B5' }}
            />
          </TouchableOpacity>
        ),

        drawerActiveBackgroundColor: 'transparent',
        drawerType: 'front',
        drawerStyle: DrawerStyles.drawer,
        drawerItemStyle: DrawerStyles.item,

      })}
    >

      <Drawer.Screen
        name="HomeTabs"
        component={TabNavigator}
        options={{ drawerLabel: getDrawerLabel('Home', isEnabled) }}
      />

      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: getDrawerLabel('Profile', isEnabled) }}
      />

      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{ drawerLabel: getDrawerLabel('Setting', isEnabled) }}
      />

      <Drawer.Screen
        name="Help"
        component={Help}
        options={{ drawerLabel: getDrawerLabel('Help', isEnabled) }}
      />

      <Drawer.Screen
        name="Privacy"
        component={Privacy}
        options={{ drawerLabel: getDrawerLabel('Privacy', isEnabled) }}
      />

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;