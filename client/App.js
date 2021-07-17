import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import Map from './components/Map'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
        <View style={styles.container}>
          <Map/>
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});