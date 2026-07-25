import React, {useState} from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../assets/css/Login';

// import  AuthContext  from '../context/AuthContext';
import useAuth from '../hooks/useAuth'

const LoginScreen = () => {
  const {user, isAuthenticated, setIsAuthenticated} = useAuth();
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  function CheckLogin(){
    
    if(value1 === user.email && value2 === '123'){
      setIsAuthenticated(true)
      Alert.alert("Login Success")
    }else{
      setIsAuthenticated(false)
      Alert.alert("Login Failed")
    }

  }

  return (
    <View style={styles.innerContainer}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Login to your account</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        style={styles.input}
        onChangeText={(text) => setValue1(text)}
        value={value1}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
        onChangeText={(text) => setValue2(text)}
        value={value2}
      />

      <TouchableOpacity style={styles.button} onPress={CheckLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don't have an account? <Text style={styles.signup}>Sign up</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

