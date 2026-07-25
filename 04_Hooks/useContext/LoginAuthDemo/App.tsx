/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState } from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

// import AuthContext from './src/context/AuthContext';
import { AuthProvider } from './src/context/AuthContext';
import LoginScreen from './src/screens/LoginScreen';

import Tabbar from './src/navigation/Tabbar'
import useAuth from './src/hooks/useAuth'


function Main(){
  const {isAuthenticated} = useAuth();
  
  return isAuthenticated ? <Tabbar/>: <LoginScreen/> ;

}

function App(){
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [user, setUser] = useState({ name: 'Chaitanya', email: 'chaitanya@gmail.com' });

    return(
      <NavigationContainer>
       {/* <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}> */}
       
       <AuthProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{flex:1}}>
            <Main/>
          </SafeAreaView>
        </SafeAreaProvider>
        </AuthProvider>
      {/* </AuthContext.Provider> */}
      </NavigationContainer>
    )
}

export default App;
