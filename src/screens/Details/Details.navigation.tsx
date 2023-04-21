import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { ProductAdded } from './components';
import { Details as DetailsScreen } from './Details';
import { RouteProp } from '@react-navigation/native';

type RootSackParamList = {
  Main: undefined;
  DetailsStack: {id: string}; 
  Details: {id: string};
  ProductAdded: undefined;
}

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
      </DetailsStack.Group>
    </DetailsStack.Navigator>
  );
}