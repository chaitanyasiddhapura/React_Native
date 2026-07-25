import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/context/ThemeContext';
import DrawerNavigator from './src/navigation/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <DrawerNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}