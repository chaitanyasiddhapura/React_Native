import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 16,
    // color: 'gray',
    marginTop: 5,
  },
  featured: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  card: {
    width: 200,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardText: {
    padding: 10,
    fontWeight: 'bold',
  },
  actions: {
    marginHorizontal: 20,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#3f73a1',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 5,
  },
  actionText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;