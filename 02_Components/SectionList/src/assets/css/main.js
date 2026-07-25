import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    flex: 1,
    paddingLeft: 10,
    textAlign: 'left',

    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 25,
    height: 25,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
  sectionHeader: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginVertical: 10,
  },
  messageContainer: {
    maxWidth: '70%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
  },
  sender: {
    backgroundColor: '#0078fe',
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
  },
  receiver: {
    backgroundColor: '#8f8f92',
    alignSelf: 'flex-start',
    borderTopLeftRadius: 0,
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
  },
  user: {
    fontSize: 12,
    color: '#fefefe',
    marginBottom: 2,
  },
  bottomTyping: {
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  InputText: {
    backgroundColor: '#fdfcfc',
    height: 50,
    width: 310,
    borderColor: '',
    borderRadius: 10,
    // marginBottom: 20,
  },
  btn: {
    backgroundColor: '#0078fe',
    height: 50,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;