import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import { Link } from '@react-navigation/native';
// import { Button } from '@react-navigation/elements';


function Home({ navigation }){
    
  return(
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.Container}>
          <Text>Welcome, User</Text>
          {/* <Link screen="About">Go to Details</Link> */}
          <Button title="About" onPress={() => navigation.navigate("About", { name: "Chaitanya" })}/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
  flex:1,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"black",
},

  Container:{
    height:200,
    width:200,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 10
  }
});
export default Home;