import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    right: 25,

    height: 60,
    width: 60,
    borderRadius: 30,

    backgroundColor: '#72a4cd',

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 5, 
    shadowColor: '#000', 
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },

  btnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // dark overlay
  },

  modalView: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    elevation: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  button: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },

  saveButton: {
    backgroundColor: '#2196F3',
  },

  cancelButton: {
    backgroundColor: '#ff4d4d',
  },

  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;