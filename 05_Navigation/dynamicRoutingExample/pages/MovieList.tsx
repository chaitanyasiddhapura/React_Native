import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const movies = [
  { id: '1', title: 'Avengers', year: '2019', img:'1.jpg'},
  { id: '2', title: 'Interstellar', year: '2014', img: '2.jpeg'},
  { id: '3', title: 'Inception', year: '2010', img: '3.png'},
  { id: '4', title: 'Batman', year: '2022', img: '4.jpg'},
];


function MovieList({ navigation }) {

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("Details", { movie: item })}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.year}</Text>
    </TouchableOpacity>
  );

  return (

    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"white"
  },
  item: {
    padding: 20,
    backgroundColor: "#e9e4e4",
    marginBottom: 10,
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default MovieList;