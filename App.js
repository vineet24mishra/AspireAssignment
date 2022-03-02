/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { store } from './src/redux/store'
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
};

export default App;
