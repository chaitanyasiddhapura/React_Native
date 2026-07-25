
import React, { useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { requestNotificationPermission, showLocalNotification, scheduleNotification, } from '../notifications/notificationService';

export default function HomeScreen({ navigation }) {
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Show Notification" onPress={showLocalNotification} />

      <View style={{ height: 20 }} />

      <Button
        title="Notification After 10 Second"
        onPress={scheduleNotification}
      />

      <Button
        title="Move to next page"
        onPress={() =>
          navigation.navigate('PhotoGallery', {
            id: 1,
            name: 'Chaitanya',
          })
        }
      />
    </View>
  );
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 30,
  },

  buttonWrapper: {
    width: '100%',
    marginVertical: 8,
  },

  buttonSpacing: {
    height: 15,
  },
});