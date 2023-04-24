import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type ChooseColorStackProps = {
  navigation: StackNavigationProp<RootSackParamList, 'ChooseColor'>;
  route: RouteProp<RootSackParamList, 'ChooseColor'>
};