import React, { useState } from 'react';
import { View,Text,TextInput, TouchableOpacity, ActivityIndicator, Alert,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../assets/css/loginCss';
import { useDispatch } from 'react-redux';
import { Login } from '../features/auth/userAuthenticationReducer';
import useAuth from '../hook/auth';


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const {user} = useAuth();

  function handleLogin() {
    setLoading(true);

    setTimeout(() => {
      if (email === user.email && password === user.password) {
        dispatch(Login());
      } else {
        Alert.alert('Invalid credentials');
      }
      setLoading(false);
    }, 500);
  }

  return (
   <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.logo}>TerritoryDimension</Text>
        <Text style={styles.subtitle}>Claim your world</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator color="#000" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}>Don’t have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}