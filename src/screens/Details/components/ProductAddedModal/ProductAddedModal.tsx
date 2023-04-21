import CheckIcon from '@icons/Check.svg';
import { Pressable, Text, View } from 'react-native';
import {styles} from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type DetailsStckProps = {
  navigation: StackNavigationProp<RootSackParamList, 'ProductAdded'>;
  route: RouteProp<RootSackParamList, 'ProductAdded'>
}

export const ProductAdded = ({navigation}: DetailsStckProps) => {
  const handlePressOk = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.root}>
    <View style={styles.card}>
      <CheckIcon/>
      <Text>Product added to your cart</Text>
      <Pressable onPress={handlePressOk} style={styles.container}>
        <Text style={styles.title}>OK</Text>
      </Pressable>
    </View>
    </View>
  );
}
