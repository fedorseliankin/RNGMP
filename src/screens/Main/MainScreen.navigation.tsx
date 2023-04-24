import { DrawerActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Pressable } from "react-native";
import MenuIcon from '@icons/Menu.svg';
import CartIcon from '@icons/Cart.svg';
import LikeIcon from '@icons/Like.svg';
import BackIcon from '@icons/Arrow.svg';

import { DetailStack } from "screens/Details/Details.navigation";
import { MainPage } from "./MainPage";

const Stack = createNativeStackNavigator<RootSackParamList>();

export const StackNavigator = () =>
  <Stack.Navigator>
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
        headerRight: () => <><LikeIcon style={{marginRight: 20}}/><CartIcon /></>
      })}
    />
</Stack.Navigator>
