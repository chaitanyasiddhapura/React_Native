/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { StyleSheet, TextInput, Text, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [TetxFieldInput, onChangeText] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text>{TetxFieldInput}</Text>
          <TextInput
            style={styles.input}
            placeholder="Write somthing"
            placeholderTextColor="gray"
            onChangeText={onChangeText}
            value={TetxFieldInput}
          />

          <TextInput
            style={styles.input}
            placeholder="Disable text Feild"
            placeholderTextColor="red"
            editable={false}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="Open numeric keyborad"
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Address"
            multiline
            scrollEnabled={true}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter a Mobile Number (maxLength Demo)"
            keyboardType="numeric"
            maxLength={10}
          />

          <TextInput
              style={styles.input}
              placeholder="Write something"
              returnKeyType="next"
              multiline={true}
              numberOfLines={2}
              textAlignVertical="top"   
          />

          <TextInput

            style={styles.input}
            placeholder="Search"
            returnKeyType="search"
            keyboardType="default"
          />

          <TextInput
            style={styles.input}
              placeholder="Username"
            textContentType="username"
            clearButtonMode="while-editing"
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
