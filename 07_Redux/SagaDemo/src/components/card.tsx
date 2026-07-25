import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function Card() {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart.cart);

  const addItem = () => {
    const item = {
      id: Math.random(),
      name: 'Product ' + (cart.length + 1),
    };

    dispatch({
      type: 'ADD_TO_CART_REQUEST',
      payload: item,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Items: {cart.length}</Text>

      <Button title="Add to Cart" onPress={addItem} />
    <ScrollView>
      {cart.map((item) => (
        <Text key={item.id} style={styles.item}>
          {item.name}
        </Text>
      ))}
</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom:150
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  item: {
    marginTop: 5,
    fontSize: 16,
  },
});