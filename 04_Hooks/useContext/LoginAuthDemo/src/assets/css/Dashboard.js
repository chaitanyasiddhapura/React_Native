import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FB' },
  scrollContent: { padding: 24 },
  header: { marginBottom: 30 },
  greeting: { fontSize: 28, fontWeight: '700', color: '#1A1C1E' },
  date: { fontSize: 16, color: '#6C7278', marginTop: 4 },
  statsGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  statCard: {
    backgroundColor: '#FFFFFF',
    width: '48%',
    padding: 20,
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  statValue: { fontSize: 24, fontWeight: '800', color: '#1A1C1E' },
  statLabel: { fontSize: 14, color: '#6C7278', marginTop: 4 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#1A1C1E', marginBottom: 15 },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  activityDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#007AFF', marginRight: 15 },
  activityText: { fontSize: 15, fontWeight: '600', color: '#1A1C1E' },
  activityTime: { fontSize: 13, color: '#999', marginTop: 2 },
});

export default styles;