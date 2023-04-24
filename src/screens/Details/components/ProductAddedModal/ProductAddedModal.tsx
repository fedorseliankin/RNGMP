import CheckIcon from '@icons/Check.svg';
import { Pressable, Text, View } from 'react-native';
import {styles} from './styles';
import { ProductAddedStackProps } from './types';

export const ProductAdded = ({navigation}: ProductAddedStackProps) => {
  const handlePressOk = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.root}>
      <View style={styles.card}>
        <CheckIcon/>
        <Text style={styles.text}>Product added to your cart</Text>
        <Pressable onPress={handlePressOk} style={styles.container}>
          <Text style={styles.title}>OK</Text>
        </Pressable>
      </View>
    </View>
  );
}
