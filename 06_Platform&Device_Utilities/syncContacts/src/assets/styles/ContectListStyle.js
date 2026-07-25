import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 5,
    backgroundColor: '#F4F6FB',
  },

  listItems: {
    backgroundColor: '#fff',
    padding: 18,
    marginVertical: 6,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },

    elevation: 4,
  },

  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },

  sectionHeader: {
    fontSize: 15,
    fontWeight: '700',
    color: '#6B7280',
    marginTop: 20,
    marginBottom: 8,
    marginLeft: 5,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  avatarText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
});

export default styles;