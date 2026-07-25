/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styles from './src/assets/css/mainPage';

function App() {
  const [active , setactive] = useState(false);
  return (
    <View style={styles.container}>
        <Modal
        animationType="fade"
        transparent={true}
        visible={active}
        onRequestClose={() => {
          console.warn("closed");
        }}
        >
          <View style={styles.container}>
            <View style={styles.View}>
            <Text style={styles.text}>Chaitanya </Text>
            <Button title="close" 
                    onPress={()=>{setactive(!active)}}/>
            </View>
          </View>
        </Modal>
        <Button 
          title={"click"}
          onPress={()=>{setactive(!active)}}
        />
    </View>
  );
}

export default App;