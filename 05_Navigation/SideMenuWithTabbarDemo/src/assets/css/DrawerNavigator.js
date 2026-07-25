import { StyleSheet } from 'react-native';

const DrawerStyles = StyleSheet.create({

  drawer: {
    backgroundColor: '#fff',
    width: 320,
  },

header: {
  backgroundColor: '#3F51B5',
  paddingVertical: 70,
  alignItems: 'center',
  marginTop: -80,   
  marginLeft: -12,
  marginRight: -12
},

  profile: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginBottom: 10,
  },

  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  location: {
    color: '#fff',
    marginLeft: 5,
  },

  menuContainer: {
    marginTop: 10,
  },

  item: {
    marginVertical: 5,
    paddingLeft: 10,
  },

  label: {
    fontSize: 16,
  },

  activeLabel: {
    color: '#3F51B5',
    fontWeight: 'bold',
  },

  inactiveLabel: {
    color: '#000',
  },

  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
    marginHorizontal: 20,
  },

  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },

  logoutText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#777',
  },

  mode: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    justifyContent: 'space-between',
    marginBottom:10,
    fontSize:16
  }

});
export default DrawerStyles;