import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";

import ProductStore from 'redux/store';
import { StackNavigator } from 'screens/Main/MainScreen.navigation';
// import { MyCart } from 'screens/MyCart';
import { MyCartStackNavigator } from 'screens/Login/MyCart.navigation';

const Drawer = createDrawerNavigator();

const AuthGuard = () => {
  
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={ProductStore}>
        <Drawer.Navigator initialRouteName='Login'>
          <Drawer.Screen
            name='Home'
            component={StackNavigator}
            options={{headerShown: false}}
          />
          <Drawer.Screen
            name='Login'
            component={MyCartStackNavigator}
            options={{headerShown: false}}
          />
        </Drawer.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
