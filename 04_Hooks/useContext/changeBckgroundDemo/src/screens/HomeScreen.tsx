import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ThemeContext from '../context/theme';

const HomeScreen = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }]}>
      <Text style={{ color: isDarkMode ? 'white' : 'black', fontSize: 18, marginBottom: 20 }}>
        Home Screen
      </Text>
      <Button
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        onPress={toggleTheme}
        color={isDarkMode ? '#ffffff' : '#000000'}
      />
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

export default HomeScreen;