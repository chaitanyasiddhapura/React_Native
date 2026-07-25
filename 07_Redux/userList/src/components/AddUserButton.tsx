import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Modal,
  TextInput,
} from 'react-native';
import styles from './AddUserButtonStyle';
import { addUser } from '../api/serApi';

const AddUserButton = ({formData,setFormData}:any) => {
  const [modalVisible, setModalVisible] = useState(false);
  // const [formData, setFormData] = React.useState({
  //   name: '',
  //   username: '',
  //   email: '',
  //   phone: '',
  //   gender: '',
  //   followers: '',
  //   following: '',
  //   profilePhoto: '',
  // });
  const handleChange = (field:any, value:any) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
 
  useEffect(() => {
    if (modalVisible) {
        setFormData({
        name: '',
        username: '',
        email: '',
        phone: '',
        gender: '',
        followers: '',
        following: '',
        profilePhoto: '',
        });
    }
    }, [modalVisible]);

  return (

    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        activeOpacity={0.7}
      >
        <View style={styles.container}>
          <Text style={styles.btnText}>Add </Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Add User</Text>

            <TextInput
              style={styles.input}
              placeholder="Name"
              value={formData.name}
              onChangeText={text => handleChange('name', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Username"
              value={formData.username}
              onChangeText={text => handleChange('username', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={formData.email}
              onChangeText={text => handleChange('email', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Phone"
              keyboardType="phone-pad"
              value={formData.phone}
              onChangeText={text => handleChange('phone', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Gender"
              value={formData.gender}
              onChangeText={text => handleChange('gender', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Followers"
              keyboardType="numeric"
              value={formData.followers}
              onChangeText={text => handleChange('followers', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Following"
              keyboardType="numeric"
              value={formData.following}
              onChangeText={text => handleChange('following', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Profile Photo URL"
              value={formData.profilePhoto}
              onChangeText={text => handleChange('profilePhoto', text)}
            />

            {/* Buttons */}
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.saveButton]}
                onPress={() => {
                  console.log(formData);
                  addUser(formData)
                  setModalVisible(false);
                }}
              >
                <Text style={styles.textStyle}>Save</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddUserButton;
