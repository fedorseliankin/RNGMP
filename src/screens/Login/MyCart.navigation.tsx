import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BackIcon from '@icons/Arrow.svg';
import { MyCart } from "./MyCart";
import React from "react";
import { Pressable } from "react-native";

const Stack = createNativeStackNavigator<RootSackParamList>();

export const MyCartStackNavigator = () =>
  <Stack.Navigator>
    <Stack.Screen
      name="SingUp"
      component={MyCart}
      options={({navigation}) => ({
        headerTitle: '',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTitleStyle: {
          color: 'white',
          fontWeight: '500',
          fontSize: 20,
        },
      })}
    />
</Stack.Navigator>
