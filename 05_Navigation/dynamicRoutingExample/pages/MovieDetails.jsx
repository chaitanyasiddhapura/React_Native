import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function MovieDetails({ route }) {

    const { movie } = route.params;
    const images = {
    '1.jpg': require('../asset/1.jpg'),
    '2.jpeg': require('../asset/2.jpeg'),
    '3.png': require('../asset/3.png'),
    '4.jpg': require('../asset/4.jpg'),
    };

  return (
    <View style={styles.container}>
    <Image style={styles.images} source={images[movie.img]}/>
      <Text style5={styles.title}>{movie.title}</Text>
      <Text>Release Year: {movie.year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"white"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  images: {
  width: 200,
  height: 300,
  marginBottom: 20
  }

});

export default MovieDetails;