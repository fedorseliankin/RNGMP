/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native';

import ProductStore from './src/redux/store';
import { Details } from './src/screens/Details/Details';
import { MainPage } from './src/screens/Main/MainPage';

function App(): JSX.Element {
  return (
    <Provider store={ProductStore}>
      <SafeAreaView>
        {/* <MainPage/> */}
        <Details />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
