/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useRef } from 'react';
import { StyleSheet, TouchableOpacity, Image, PermissionsAndroid, Alert, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

async function requestLocationPermission() {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'GetLiveLocation App needs access to your location',
          message: 'GetLiveLocation App needs access to your location so you can get your live location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else {
    return true;
  }
}
function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const mapRef = useRef(null);

  const [markerPosition, setMarkerPosition] = useState({
    // defual location
    latitude: 22.27906460974508,
    longitude: 70.79941776264673,
  });

  const goToLiveLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      Alert.alert('Permission denied', 'Cannot access location');
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setMarkerPosition({ latitude, longitude });

        mapRef.current?.animateToRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }, 1000);
      },
      (error) => {
        console.log(error);
        Alert.alert('Error', 'Could not fetch location');
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return (
    <>
      <MapView
        // provider="google"
        ref={mapRef}
        style={styles.container}
        initialRegion={{
          latitude: markerPosition.latitude,
          longitude: markerPosition.longitude,
          latitudeDelta: 0.15,
          longitudeDelta: 0.15,
        }}
        onPress={(e) => {
          const { latitude, longitude } = e.nativeEvent.coordinate;
          setMarkerPosition({ latitude, longitude });
        }}
        showsUserLocation={true}
      >
        <Marker coordinate={markerPosition} />
      </MapView>

      <TouchableOpacity style={styles.markerContainer} onPress={goToLiveLocation}>
        <Image
          source={require('./src/assets/target.png')}
          style={styles.marker}
        />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  markerContainer: {
    height: 50,
    width: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: "#ffffff",
    top: '95%',
    right: '5%',
    transform: [{ translateX: -10 }, { translateY: -40 }],
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  marker: { height: 30, width: 30, resizeMode: 'contain', tintColor: '#6f6e6e' },
});

export default App;