import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FB', // soft background
    paddingTop: 10,
  },

  addBtn: {
    position: 'absolute',  
    height: 70,
    width: 70,
    backgroundColor: '#6366F1', // vibrant accent
    borderRadius: 35,       
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 25,
    right: 25,              
    elevation: 8,           
    shadowColor: '#6366F1',    
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    transform: [{ scale: 1 }],
  },

  addOption: {
    color: "#fff",
    fontSize: 36,
    fontWeight: '700',     
  },
  modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
},
modalContent: {
  width: '90%',
  backgroundColor: '#fff',
  padding: 20,
  borderRadius: 10,
  elevation: 5,
},
modalTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 15,
  textAlign: 'center',
},
input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  padding: 10,
  marginVertical: 5,
},
modalButtons: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 15,
},

});

export default styles;