import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";

import ProductStore from 'redux/store';
import { MainPage } from './src/screens/Main/MainPage';
import MenuIcon from '@icons/Menu.svg';
import BackIcon from '@icons/Arrow.svg';
import CartIcon from '@icons/Cart.svg';
import LikeIcon from '@icons/Like.svg';
import { Pressable } from 'react-native';
import { DetailStack } from 'screens/Details/Details.navigation';

type RootSackParamList = {
  Main: undefined;
  Details: {id: string};
  DetailsStack: {id: string};
  ProductAdded: undefined;
}
const Stack = createNativeStackNavigator<RootSackParamList>();
const Drawer = createDrawerNavigator();

const StackNavigator = () =>
  <Stack.Navigator
  >
    <Stack.Screen
      name="Main"
      component={MainPage}
      options={({navigation}) => ({
        headerTitle: 'ECommerce store',
        headerStyle: {
          backgroundColor: '#008ACE',
        },
        headerTitleStyle: {
          color: 'white',
          fontWeight: '500',
          fontSize: 20,
        },
        headerLeft: () => <Pressable onPressIn={() => navigation.dispatch(DrawerActions.openDrawer())}><MenuIcon /></Pressable>,
        headerRight: () =>  <CartIcon />
      })}
    />
    <Stack.Screen
      name="DetailsStack"
      component={DetailStack}
      options={({navigation}) => ({
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#008ACE',
        },
        headerLeft: () => <Pressable onPress={() => navigation.navigate('Main')}><BackIcon /></Pressable>,
        headerRight: () => <><LikeIcon/><CartIcon /></>
      })}
    />
</Stack.Navigator>

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={ProductStore}>
        <Drawer.Navigator
          initialRouteName='Main'
          >
          <Drawer.Screen
            name='Home'
            component={StackNavigator}
            options={{headerShown: false}}
          />
        </Drawer.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
