import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { ThemeContext } from '../context/ThemeContext'; 

import styles from '../assets/css/search';

const Search = () => {
  const [query, setQuery] = useState('');
  const recentSearches = ['React Native', 'Expo', 'Reanimated', 'Navigation', 'Hooks'];
  const {isEnabled} = useContext(ThemeContext);

  return (
    <SafeAreaProvider>
    <SafeAreaView style={[styles.safeArea, {backgroundColor: isEnabled ? "#000000" : "white"}]}>
      <View style={styles.header}>
        <Text style={[styles.headerText, {color: isEnabled ? "white" : "black"}]}>Search</Text>
        <Text style={[styles.subHeaderText, {color: isEnabled ? "white" : "gray"}]}>Find what you need quickly</Text>
      </View>
      
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder="Type something..."
          value={query}
          onChangeText={setQuery}
        />
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Search;