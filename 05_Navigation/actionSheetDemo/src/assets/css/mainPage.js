import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#f5f5f5',
    width: '100%',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width,
    marginTop: 20,
  },
  infoBox: {
    alignItems: 'center',
  },
  infoNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoLabel: {
    fontSize: 14,
    color: '#888',
  },
});
