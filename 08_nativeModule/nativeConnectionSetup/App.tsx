/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View, Button, NativeModules } from 'react-native';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const {MyNativeModule} = NativeModules

function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <AppContent />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function AppContent() {

  // const callNative = () => {
  //   MyNativeModule.showMessage("Hello, Users"); 
  // };,
  
  return (
    <View style={styles.container}>
      <Button 
        title="Open Native Screen"
        onPress={() => MyNativeModule.openNewScreen()}
      />
    </View>
  );
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
});

export default App;
