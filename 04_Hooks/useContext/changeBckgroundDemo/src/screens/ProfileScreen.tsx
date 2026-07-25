import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ThemeContext from '../context/theme';

const ProfileScreen = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }]}>
      <Text style={{ color: isDarkMode ? 'white' : 'black', fontSize: 18 }}>
        I am the Profile page
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;