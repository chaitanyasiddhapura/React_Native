import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

function Setting() {
  const navigation = useNavigation();

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center', gap: 10}}>
      <Text>Setting Page</Text>
      <Button onPress={() => navigation.goBack()}> Go Back Home </Button>
      <Button onPress={() => navigation.navigate('Notifications')}>Go to Notifications</Button>
    </View>
  );
}

export default Setting;