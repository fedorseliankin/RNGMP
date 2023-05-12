import 'react-native-gesture-handler';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { ProductAdded } from './components';
import { Details as DetailsScreen } from './Details';
import { RouteProp } from '@react-navigation/native';
import { ChooseColor } from './components/ChooseColor';
import { LoginToContinue } from './components/LoginToContinue';

const DetailsStack = createStackNavigator<RootSackParamList>();
type DetailsStckProps = {
  navigation: StackNavigationProp<RootSackParamList, 'DetailsStack'>;
  route: RouteProp<RootSackParamList, 'DetailsStack'>
}

export function DetailStack({route, navigation}: DetailsStckProps) {
  return (
    <DetailsStack.Navigator
      initialRouteName='Details'
    >
      <DetailsStack.Group>
        <DetailsStack.Screen
        name="Details"
        component={DetailsScreen}
        initialParams={{id: route.params.id}}
        options={{headerShown: false}}
      />
      </DetailsStack.Group>
      <DetailsStack.Group screenOptions={{
        presentation: 'card',
      }}>
        <DetailsStack.Screen
          name="ProductAdded"
          component={ProductAdded}
          options={{
            headerShown: false,
          }}
        />
        <DetailsStack.Screen
          name="ChooseColor"
          component={ChooseColor}
          options={{
            headerShown: false,
          }}
        />
        <DetailsStack.Screen
          name="LoginToContinue"
          component={LoginToContinue}
          options={{
            headerShown: false,
          }}
        />
      </DetailsStack.Group>
    </DetailsStack.Navigator>
  );
}