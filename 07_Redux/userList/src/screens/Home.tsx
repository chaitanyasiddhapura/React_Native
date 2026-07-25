import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
  Button,
  RefreshControl,
} from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';

import styles from '../assets/app';
import User from '../models/User';
import AddUserButton from '../components/AddUserButton';
import SearchBar from '../components/SearchBar';

import getUsers, { editUser, deleteUser } from '../api/serApi';

const Home = () => {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState<User[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    gender: '',
    followers: 0,
    following: 0,
    profilePhoto: '',
  });
  const [refreshing, setRefreshing] = React.useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData();
  }, [refreshing]);

  const fetchData = async () => {
    try {
      setloading(true);
      const users = await getUsers();
      setdata(users);
    } catch (error) {
      console.log('Fetch error:', error);
    } finally {
      setloading(false);
    }
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleEdit = (user: any) => {
    setSelectedUser(user);

    setFormData({
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      followers: user.followers,
      following: user.following,
      profilePhoto: user.profilePhoto,
    });

    setModalVisible(true);
  };

  const handleDelete = async (id: any) => {
    try {
      await deleteUser(id);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar onChangeText={setSearch} />
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Choose Action', '', [
                  {
                    text: 'Edit',
                    onPress: () => handleEdit(item),
                  },
                  {
                    text: 'Delete',
                    onPress: () => {
                      handleDelete(item.id);
                    },
                    style: 'destructive',
                  },
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                ]);
              }}
            >
              <View style={styles.container}>
                <Image
                  style={styles.avatar}
                  source={{ uri: item.profilePhoto }}
                />
                <View style={styles.subContainer}>
                  <Text style={styles.userName}>{item.username}</Text>
                  <Text style={styles.statsText}>
                    Following {item.followers} Following {item.following}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.title}>Edit User</Text>

            <TextInput
              placeholder="Name"
              value={formData.name}
              onChangeText={text => setFormData({ ...formData, name: text })}
              style={styles.input}
              placeholderTextColor="#999"
            />

            <TextInput
              placeholder="Username"
              value={formData.username}
              onChangeText={text =>
                setFormData({ ...formData, username: text })
              }
              style={styles.input}
              placeholderTextColor="#999"
            />

            <TextInput
              placeholder="Email"
              value={formData.email}
              onChangeText={text => setFormData({ ...formData, email: text })}
              style={styles.input}
              keyboardType="email-address"
              placeholderTextColor="#999"
            />

            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Save"
                  color="#4CAF50"
                  onPress={async () => {
                    if (!selectedUser) return;

                    await editUser(selectedUser.id, formData);

                    setModalVisible(false);
                    fetchData();
                  }}
                />
              </View>

              <View style={styles.button}>
                <Button
                  title="Cancel"
                  color="#f44336"
                  onPress={() => setModalVisible(false)}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/*  onPress={() => console.log('Add user pressed')}  */}
      <AddUserButton formData={formData} setFormData= {setFormData}/>
    </View>
  );
};

export default Home;
