import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from '../assets/css/Dashboard';
import useAuth from '../hooks/useAuth';

const DashboardScreen = () => {
  const {user} = useAuth();
 
  return (
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.greeting}>{user.name }</Text>
          <Text style={styles.date}>Wednesday, March 18</Text>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Active Tasks</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: '#E3F2FD' }]}>
            <Text style={[styles.statValue, { color: '#007AFF' }]}>85%</Text>
            <Text style={styles.statLabel}>Completion</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Recent Activity</Text>
        {[1, 2, 3].map((item) => (
          <View key={item} style={styles.activityItem}>
            <View style={styles.activityDot} />
            <View>
              <Text style={styles.activityText}>Project Update #{item}</Text>
              <Text style={styles.activityTime}>2 hours ago</Text>
            </View>
          </View>
        ))}
      </ScrollView>
  );
};

export default DashboardScreen;

