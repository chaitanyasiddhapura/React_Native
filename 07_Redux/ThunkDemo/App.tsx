/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector, Provider } from 'react-redux';
import store from './src/app/store';
import { fetchUsers } from './src/actions/userActions';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Root = () => {
  const dispatch = useDispatch();

  const { loading, users, error } = useSelector((state: any) => state.comments);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}

      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ marginBottom: 10, textAlign: 'justify'}}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <SafeAreaView style={{flex:1}}>
          <Root />
        </SafeAreaView>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
