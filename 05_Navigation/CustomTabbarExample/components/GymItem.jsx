import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function GymItem({ title, description }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{title}</Text>
      {description ? <Text style={styles.itemDescription}>{description}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default GymItem;