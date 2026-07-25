import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginBottom: 15,
  },

  input: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 20,
    fontSize: 16,
    color: '#1F2937',
    borderWidth: 1,
    borderColor: '#E5E7EB',

    // Shadow (iOS)
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },

    // Android
    elevation: 3,
  },
});

export default styles;