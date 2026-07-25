import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  View : {
    backgroundColor : "white" ,
    height : 140 ,
    width : 250,
    borderRadius : 15,
    alignItems : "center",
    justifyContent : "center",
    borderColor : "black",
    borderWidth:2,
  },
  text : {
    fontSize : 20,
    color : "green",
    marginBottom:20
  },
  button : {
    margin : 20,
    width:200,
  }
});

export default styles;