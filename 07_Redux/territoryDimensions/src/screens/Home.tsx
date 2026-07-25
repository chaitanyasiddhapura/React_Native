import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const isDark = useSelector(state => state.theme.isDark);

  const colors = {
    background: isDark ? '#0f172a' : '#f1f5f9',
    card: isDark ? '#1e293b' : '#ffffff',
    text: isDark ? '#fff' : '#0f172a',
    subText: isDark ? '#94a3b8' : '#475569',
    accent: '#38bdf8',
  };

  return (
    <SafeAreaView style={{flex:1,  backgroundColor: colors.background }}>
    <ScrollView style={styles.container}>
      
      <Text style={[styles.logo, { color: colors.accent }]}>
      TerritoryDimension
      </Text>

      <Text style={[styles.subtitle, { color: colors.subText }]}>
        Your territory is growing
      </Text>

      <View style={[styles.mapCard, { backgroundColor: colors.card }]}>
        <Text style={{ color: colors.subText }}>
        Live Territory Map
        </Text>
      </View>

      <View style={styles.row}>
        <StatCard label="Covered" value="2.3 km²" colors={colors} />
        <StatCard label="Distance" value="1.2 km" colors={colors} />
      </View>

      <View style={styles.row}>
        <StatCard label="Streak" value="5 days" colors={colors} />
        <StatCard label="New Land" value="+120 m²" colors={colors} />
      </View>

      <TouchableOpacity style={[styles.primaryButton, { backgroundColor: colors.accent }]}>
        <Text style={styles.primaryText}>Start Tracking</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.secondaryButton, { backgroundColor: colors.card }]}>
        <Text style={{ color: colors.text, fontWeight: 'bold' }}>Stop Tracking</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.exploreButton}>
        <Text style={{ color: colors.subText }}>Explore Map</Text>
      </TouchableOpacity>

    </ScrollView>
    </SafeAreaView>
  );
}

function StatCard({ label, value, colors }) {
  return (
    <View style={[styles.statCard, { backgroundColor: colors.card }]}>
      <Text style={[styles.statValue, { color: '#38bdf8' }]}>{value}</Text>
      <Text style={[styles.statLabel, { color: colors.subText }]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
  },

  mapCard: {
    height: 220,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  statCard: {
    flex: 1,
    padding: 15,
    borderRadius: 12,
    margin: 5,
    alignItems: 'center',
  },

  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  statLabel: {
    fontSize: 12,
    marginTop: 5,
  },

  primaryButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  primaryText: {
    color: '#000',
    fontWeight: 'bold',
  },

  secondaryButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  exploreButton: {
    marginTop: 20,
    alignItems: 'center',
  },
});