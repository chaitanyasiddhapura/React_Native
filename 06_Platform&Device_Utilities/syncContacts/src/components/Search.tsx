import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import styles from '../assets/styles/SearchStyle';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // 🔥 Debounce (300ms)
  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search contacts..."
        placeholderTextColor="#999"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
    </View>
  );
};

export default Search;