import React from 'react';
import {View, Text} from 'react-native';
import store from './src/store/store';
import {Provider} from 'react-redux';
import Providers from './src/Navigations/index';

export default function App() {
  return (
    <Provider store={store}>
      <Providers />
    </Provider>
  );
}
