/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, TextInput, Button, } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ProductList from './src/components/ProductList';
import RealmService from './src/services/RealmService';
import 'react-native-get-random-values';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const openAddModal = () => {
    setEditingProduct(null);
    setName('');
    setDescription('');
    setPrice('');
    setModalVisible(true);
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setName(product.name);
    setDescription(product.description || '');
    setPrice(product.price.toString());
    setModalVisible(true);
  };

  const saveProduct = () => {
    if (!name.trim() || !price.trim()) {
      alert('Name and Price are required');
      return;
    }

    const numericPrice = parseInt(price, 10);
    if (isNaN(numericPrice)) {
      alert('Price must be a number');
      return;
    }

    if (editingProduct) {
      RealmService.updateProduct(editingProduct.id, {
        name: name.trim(),
        description: description.trim(),
        price: numericPrice,
      });
    } else {
      RealmService.addProduct({
        id: Date.now().toString(),
        name: name.trim(),
        description: description.trim(),
        price: numericPrice,
      });
    }

    setName('');
    setDescription('');
    setPrice('');
    setEditingProduct(null);
    setModalVisible(false);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ProductList onEdit={openEditModal} />

        <TouchableOpacity style={styles.addBtn} onPress={openAddModal}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>

        <Modal visible={modalVisible} animationType="slide" transparent>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>
                {editingProduct ? 'Edit Product' : 'Add Product'}
              </Text>

              <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
              />
              <TextInput
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                style={styles.input}
              />
              <TextInput
                placeholder="Price"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
                style={styles.input}
              />

              <Button title={editingProduct ? 'Update' : 'Save'} onPress={saveProduct} />
              <Button
                title="Cancel"
                onPress={() => {
                  setModalVisible(false);
                  setEditingProduct(null);
                }}
                color="red"
              />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  addBtn: {
    backgroundColor: '#000',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
    elevation: 5,
  },
  btnText: { color: '#fff', fontSize: 30 },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  modalTitle: { fontSize: 18, marginBottom: 10, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 8, borderRadius: 5 },
});

export default App;