import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';




function About({ route, navigation }){

  const name = route?.params?.name || "Guest";
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Update count"
          onPress={() => setCount((c) => c + 1)}
        />
      ),
    });
  }, [navigation]);

  return(

    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.Container}>
          <Text style={styles.text}>About</Text>
          <Text style={styles.text}>Name: {name}</Text>
          <Text style={styles.text}>Count: {count}</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
  flex:1,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"white",
},

  Container:{
    height:200,
    width:200,
    backgroundColor:"black",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 10,
},

text:{
    color: "white",  
}

});
export default About;