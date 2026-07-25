import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { LOCATIONIQ_API_KEY } from '@env';

const API_KEY = LOCATIONIQ_API_KEY;

export default function MapScreen() {
  const [region, setRegion] = useState({
    latitude: 22.3039,
    longitude: 70.8022,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const [query, setQuery] = useState('');
  const [marker, setMarker] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (text) => {
    setQuery(text);
    if (text.length < 2) {
      setSuggestions([]);
      return;
    }

    try {
      const res = await fetch(
        `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${encodeURIComponent(
          text,
        )}&format=json&limit=5`,
      );
      const data = await res.json();
      setSuggestions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const selectLocation = (location) => {
    const lat = parseFloat(location.lat);
    const lon = parseFloat(location.lon);

    const newRegion = {
      latitude: lat,
      longitude: lon,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };

    setRegion(newRegion);
    setMarker({ latitude: lat, longitude: lon });
    setQuery(location.display_name);
    setSuggestions([]);
  };

  const searchLocation = async () => {
    if (!query) return;
    if (suggestions.length > 0) {
      selectLocation(suggestions[0]);
    }
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        {marker && <Marker coordinate={marker} />}
      </MapView>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search location..."
          value={query}
          onChangeText={fetchSuggestions}
          style={styles.input}
        />
        <TouchableOpacity onPress={searchLocation} style={styles.button}>
          <Image
            style={styles.icon}
            source={require('../assets/search.png')}
          />
        </TouchableOpacity>
      </View>

      {suggestions.length > 0 && (
        <FlatList
          style={styles.suggestionsList}
          data={suggestions}
          keyExtractor={(item) => item.place_id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.suggestionItem}
              onPress={() => selectLocation(item)}
            >
              <Text>{item.display_name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    bottom: 40,
    left: 10,
    right: 10,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 5,
    elevation: 5,
    zIndex: 1,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
    tintColor: '#ffffff',
  },
  suggestionsList: {
    position: 'absolute',
    bottom: 100,
    left: 10,
    right: 10,
    maxHeight: 200,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    zIndex: 2,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});