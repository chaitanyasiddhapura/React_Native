import { StyleSheet, View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

function Notification() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      <Text>Notification Page</Text>
      <Button onPress={() => navigation.goBack()}>Go back home</Button>
      <Button onPress={() => navigation.navigate('Setting')}>Go to Setting</Button>
    </View>
  );
}

export default Notification;