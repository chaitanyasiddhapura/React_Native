import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FB' },
  content: { flex: 1, padding: 24, alignItems: 'center' },
  profileHeader: { alignItems: 'center', marginTop: 40, marginBottom: 40 },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 5,
  },
  avatarText: { color: '#FFF', fontSize: 32, fontWeight: '700' },
  userName: { fontSize: 24, fontWeight: '700', color: '#1A1C1E' },
  userEmail: { fontSize: 15, color: '#6C7278', marginTop: 4 },
  menuSection: { width: '100%', backgroundColor: '#FFF', borderRadius: 20, padding: 10, marginBottom: 30 },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuItemText: { fontSize: 16, color: '#1A1C1E', fontWeight: '500' },
  logoutButton: {
    width: '100%',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE5E5', // Soft red background
    borderWidth: 1,
    borderColor: '#FFC1C1',
  },
  logoutText: { color: '#FF3B30', fontSize: 16, fontWeight: '700' },
});

export default styles;