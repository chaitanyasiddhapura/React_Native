import React, {useContext} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../assets/css/Notification';

const notifications = [
  { id: 1, title: 'New Message', description: 'You have received a new message from John.' },
  { id: 2, title: 'App Update', description: 'Version 2.0 is now available.' },
  { id: 3, title: 'Friend Request', description: 'Anna sent you a friend request.' },
];

const Notification = () => {
  const {isEnabled} = useContext(ThemeContext)
  return (
     <SafeAreaProvider>
    <SafeAreaView style={[styles.safeArea,{backgroundColor: isEnabled ? "#000000" : "white"}]}>
      <View style={styles.header}>
        <Text style={[styles.headerText, {color: isEnabled ? "white" : "black"}]}>Notifications</Text>
      </View>

      {notifications.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No new notifications</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {notifications.map((item) => (
            <TouchableOpacity key={item.id} style={styles.notificationCard}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationDescription}>{item.description}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Notification;
