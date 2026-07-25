/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Button } from 'react-native';
import Toast from './specs/Toast';

export default function App() {
  return (
    <View style={{ marginTop: 50 }}>
      <Button
        title="Show Toast"
        onPress={() => Toast.show("Hello from Android!")}
      />
    </View>
  );
}