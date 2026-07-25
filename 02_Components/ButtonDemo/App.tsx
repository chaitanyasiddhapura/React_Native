/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View, Button, Alert, Platform, Pressable, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
   const handleAccessibilityAction = (event: any, type: string) => {
    const action = event.nativeEvent.actionName;

    if (action === 'primary') {
      showAlert(`${type} Primary Action`);
    } else if (action === 'secondary') {
      showAlert(`${type} Secondary Action`);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Button
            title="Press me"
            onPress={() => showAlert('Hello')}
          />

          <Button
            title="Disable Button"
            onPress={() => showAlert('Hello')}
            disabled />
          

          <Pressable
          style={[styles.button, { backgroundColor: '#2196F3' }]}
          onPress={() => showAlert('Register Button Pressed')}
          accessibilityLabel="Register button"
          accessibilityActions={[
            { name: 'primary', label: 'Register Primary Action' },
            { name: 'secondary', label: 'Register Secondary Action' },
          ]}
          onAccessibilityAction={(e) =>
            handleAccessibilityAction(e, 'Register')
          }
        >
          <Text style={styles.text}>Register</Text>
        </Pressable>

        
        <Pressable
          style={[styles.button, { backgroundColor: '#F44336' }]}
          onPress={() => showAlert('Delete Button Pressed')}
          accessibilityLabel="Delete button"
          accessibilityActions={[
            { name: 'primary', label: 'Confirm Delete' },
            { name: 'secondary', label: 'Cancel Delete' },
          ]}
          onAccessibilityAction={(e) =>
            handleAccessibilityAction(e, 'Delete')
          }
        >
          <Text style={styles.text}>Delete</Text>
        </Pressable>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


function showAlert(message) {
  if (Platform.OS === 'web') {  
    window.alert(`${message}, From Web`);
  } 
  else if (Platform.OS === 'ios') {
    Alert.alert(`${message}, From iOS`);
  } else {
    Alert.alert(`${message}, From Android`);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',      
  },
    button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    marginVertical: 10,
    width: 100,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});