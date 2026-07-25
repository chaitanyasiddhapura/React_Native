import React, { useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';

const { width } = Dimensions.get('window');

const NUM_COLUMNS = 2;
const GAP = 10;
const ITEM_WIDTH = (width - GAP * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

const DATA = [
  {
    id: '1',
    uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
    width: 1080,
    height: 1350,
    title: 'Aesthetic setup',
  },
  {
    id: '2',
    uri: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7',
    width: 1080,
    height: 1920,
    title: 'Workspace',
  },
  {
    id: '3',
    uri: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
    width: 1080,
    height: 1200,
    title: 'Camera',
  },
  {
    id: '4',
    uri: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    width: 1080,
    height: 1600,
    title: 'Nature',
  },
  {
    id: '5',
    uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    width: 1080,
    height: 1400,
    title: 'Travel',
  },
];

const useMasonry = (data:any) => {
  return useMemo(() => {
    const columns = Array.from({ length: NUM_COLUMNS }, () => []);
    const heights = new Array(NUM_COLUMNS).fill(0);

    data.forEach((item:any) => {
      const aspectRatio = item.height / item.width;
      const itemHeight = ITEM_WIDTH * aspectRatio;

      const shortestColumnIndex = heights.indexOf(Math.min(...heights));

      columns[shortestColumnIndex].push(item);
      heights[shortestColumnIndex] += itemHeight + GAP;
    });

    return columns;
  }, [data]);
};

export default function PhotoGallery({route}) { 
  const columns = useMasonry(DATA);
  console.log('Name: ',route.params.name)
  const userName = route.params.name;


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hello}>Hello, {userName}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          {columns.map((column, colIndex) => (
            <View key={colIndex} style={styles.column}>
              {column.map(item => {
                const aspectRatio = item.height / item.width;
                const itemHeight = ITEM_WIDTH * aspectRatio;

                return (
                  <View key={item.id} style={styles.card}>
                    <Image
                      source={{ uri: item.uri }}
                      style={{
                        width: '100%',
                        height: itemHeight,
                        borderRadius: 16,
                      }}
                    />
                    <Text style={styles.title} numberOfLines={2}>
                      {item.title}
                    </Text>
                  </View>
                );
              })}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // 🔝 Header
  header: {
    paddingTop: 25,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  hello: {
    color: '#303030',
    fontSize: 26,
    fontWeight: '700',
  },

  // Layout
  row: {
    flexDirection: 'row',
    paddingHorizontal: GAP,
  },
  column: {
    flex: 1,
    marginHorizontal: GAP / 2,
  },

  // Card
  card: {
    marginBottom: GAP,
  },
  title: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '500',
    color: '#111',
  },
});
