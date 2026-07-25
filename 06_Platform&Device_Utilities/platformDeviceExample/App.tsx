/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import { StyleSheet, View,Text, Button,ToastAndroid,BackHandler,Dimensions,PixelRatio } from 'react-native';

const {width, height} = Dimensions.get('window');
const pixelDensity = PixelRatio.get();

function App() {

  useEffect(() => {

    const backAction = () => {
      ToastAndroid.show("Back button pressed", ToastAndroid.SHORT);
      return true; 
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();

  }, []);

  const showToast = () => {
    ToastAndroid.show("Hello User!", ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Device Info Demo</Text>

      <Text>Screen Width: {width}</Text>
      <Text>Screen Height: {height}</Text>

      <Text>Pixel Density: {pixelDensity}</Text>

      <View style={{marginTop:20}}>
        <Button
          title="Show Toast Message"
          onPress={showToast}
        />
      </View>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:22,
    fontWeight:'bold',
    marginBottom:20
  }
});

export default App;
