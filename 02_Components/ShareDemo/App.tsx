/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Share from 'react-native-share';
import files from './src/assets/Images/base64Files'

export default function App() {

  const onShare = async () => {
    try {
      const options = {
        title: "Share Image",
        message: "Look at this image",
        url: files.image1
      };

      await Share.open(options);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Share Now" onPress={onShare} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
});