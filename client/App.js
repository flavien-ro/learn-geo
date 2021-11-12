import * as React from 'react';
import { View } from 'react-native';

import Home from './components/Home';
import Map from './components/Map';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer)

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
              <Stack.Screen name="Atlas" component={Map}  screenOptions={{
                headerStyle: {
                  backgroundColor: 'white',
                },
                headerTintColor: '#0066ff',
                headerTitleStyle: {
                  display: 'none'
                },
            }}/>
            </Stack.Navigator>

          </NavigationContainer>
    </Provider>
  );
}