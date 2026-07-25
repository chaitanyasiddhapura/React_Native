import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const movies = [
  { id: '1', title: 'Avengers', year: '2019', img:'1.jpg'},
  { id: '2', title: 'Interstellar', year: '2014', img: '2.jpeg'},
  { id: '3', title: 'Inception', year: '2010', img: '3.png'},
  { id: '4', title: 'Batman', year: '2022', img: '4.jpg'},
];

const images = {
  '1.jpg': require('../asset/1.jpg'),
  '2.jpeg': require('../asset/2.jpeg'),
  '3.png': require('../asset/3.png'),
  '4.jpg': require('../asset/4.jpg'),
};

function MovieList({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("Details", { movie: item })}
    >
      <Image source={images[item.img]} style={styles.thumbnail} />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.year}</Text>
      </View>
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
    padding: 10,
    backgroundColor:"white"
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: "#eee",
    marginBottom: 10,
    borderRadius: 10
  },
  thumbnail: {
    width: 80,
    height: 100,
    borderRadius: 5
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default MovieList;