import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const images = {
  '1.jpg': require('../asset/1.jpg'),
  '2.jpeg': require('../asset/2.jpeg'),
  '3.png': require('../asset/3.png'),
  '4.jpg': require('../asset/4.jpg'),
};

function MovieDetails({ route }) {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={images[movie.img]}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.year}>Release Year: {movie.year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white"
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  year: {
    fontSize: 18
  }
});

export default MovieDetails;