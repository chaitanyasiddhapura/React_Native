/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text, StyleSheet, Alert,Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default function App(){


  return(
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Props */}
      <View style={{ justifyContent: 'center', alignItems: 'center', margin: 50 }}>
        <Text numberOfLines={7} >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quidem quia cum, quos beatae placeat eius quae ducimus ea reiciendis dolor nostrum id fugit unde eum laudantium est ratione exercitationem, vitae officiis deserunt necessitatibus iusto pariatur? Temporibus alias veniam voluptas.
        </Text>
        
        {/* <Text ellipsizeMode="tail">Hello World</Text> */}

        <Text selectable>You can Copy me</Text>
        <Text allowFontScaling={false}>allow Font Scaling</Text>
  
      </View>


      <View style={{ justifyContent: 'center', alignItems: 'center', margin: 50 }}>
        <Text onPress={() => Alert.alert('Hi, You Tap me ')}>Tap Me</Text>

       <Pressable
        onPressIn={() => Alert.alert('You tapped In !')}
        onPressOut={() => Alert.alert('You tapped Out!')}
      >
        <Text >Press Me</Text>
      </Pressable>

      <Pressable onLongPress={() => Alert.alert('Long press')}>
      <Text >Long press</Text>
      </Pressable>

      </View>
      
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </SafeAreaView>
  </SafeAreaProvider>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});