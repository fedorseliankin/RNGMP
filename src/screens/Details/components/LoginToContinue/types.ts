import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type LoginToContinueStackProps = {
  navigation: StackNavigationProp<RootSackParamList, 'LoginToContinue'>;
  route: RouteProp<RootSackParamList, 'LoginToContinue'>
}