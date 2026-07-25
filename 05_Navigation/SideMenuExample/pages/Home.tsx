import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center', gap:10}}>
      <Text>Home Page</Text>
      <Button onPress={() => navigation.navigate('Notifications')}>Go to Notifications</Button>
      <Button onPress={() => navigation.navigate('Setting')}> Go to Setting</Button>
    </View>
  );
}

export default Home;