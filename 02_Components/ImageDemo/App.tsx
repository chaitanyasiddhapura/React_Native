/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, Image, ActivityIndicator, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaProvider>
        <ImageBackground
    source={{ uri: 'https://picsum.photos/800' }}   // your background image
    style={styles.background}
    resizeMode="cover"
  >
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.ImageContainer}
          source={require('./assets/123.webp')}
        />

        <Image
          style={styles.ImageContainer}
          source={{
            uri: 'https://images.all-free-download.com/images/thumbjpg/tree_sunset_beautiful_215771.jpg',
          }}
        />
        <Image
          style={styles.ImageContainer}
          source={{
            uri: 'https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/releases/2021/06/STScI-01F8AKXPNS0J7AH5YP51M1RT4R.tiff?w=3072&h=2040&fit=clip&crop=faces%2Cfocalpoint',
          }}
        />

        <Image
          style={styles.ImageContainer}
          source={{
            uri: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/close-up-of-ocean-wave-at-sunset-free-image.jpeg?w=600&quality=80',
          }}
        />
        <Image
          style={styles.ImageContainer}
          source={{
            uri: 'https://images.unsplash.com/photo-1605571926314-ae21581e420f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D',
          }}
        />

        <Image
          style={styles.ImageContainer}
          source={require('./assets/meow.jpg')}
        />

        <Image
          style={styles.ImageContainer}
          source={{
            uri: 'https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/releases/2021/06/STScI-01F8AKXPNS0J7AH5YP51M1RT4R.tiff?w=3072&h=2040&fit=clip&crop=faces%2Cfocalpoint',
          }}
        />

        <Image
          style={styles.ImageContainer}
          source={require('./assets/4.jpg')}
        />

        <Image
          style={styles.ImageContainer}
          source={{
            uri: 'https://www.virginia.edu/assets/images/about/HP-About-UVA-Aerial-view-of-the-Rotunda-and-Pavillions-during-a-sunset-1200x800.jpg',
          }}
        />

        {/* <Image
          source={require('./assets/4.jpg')}
          resizeMode = "contain"
        /> */}

        <Image
          style={styles.ImageContainer}
          source={require('./assets/4.jpg')}
          blurRadius={5}
        />

        <Image
          style={styles.ImageContainer}
          source={require('./assets/4.jpg')}
          tintColor="blue"
          // blurRadius={5}
        />

        <Image
           style={styles.ImageContainer}
          source={require('./assets/fs.jpg')}
          resizeMode="contain"
        />

        {loading && <ActivityIndicator size="large" />}

        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.ImageContainer}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
  
            <Image
           style={styles.ImageContainer}
          source={require('./assets/fs.jpg')}
          fadeDuration={10000}
          resizeMethod="resize"
          
        />
     
      </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  ImageContainer: {
    height: 100,
    width: 100,
    borderRadius: 10,
    margin: 10,
  },

  background:{
    flex: 1

  }

});
