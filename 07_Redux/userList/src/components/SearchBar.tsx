import React from 'react';
import { View, Image, TextInput } from 'react-native';
import styles from './SearchBarStyle';

const SearchBar = ({onChangeText}:any) => {
//   const [search, setSearch] = useState('');
//   const [filteredData, setFilteredData] = useState(false);

//   const handleSearch = (text) => {
//     setSearch(text);
//     const filtered = data.filter(item =>
//       item.name.toLowerCase().includes(text.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/search.png')}
        style={styles.SerchIcon}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Search..."
        keyboardType="numeric"
      />
    </View>
  );
};

export default SearchBar;
