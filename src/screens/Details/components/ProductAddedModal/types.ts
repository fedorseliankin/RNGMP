import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type ProductAddedStackProps = {
  navigation: StackNavigationProp<RootSackParamList, 'ProductAdded'>;
  route: RouteProp<RootSackParamList, 'ProductAdded'>
}