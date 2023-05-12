import CrossIcon from '@icons/Cross.svg';
import { Pressable, Text, View } from 'react-native';
import {styles} from './styles';
import { ChooseColorStackProps } from './types';

export const ChooseColor = ({navigation}: ChooseColorStackProps) => {
  const handlePressOk = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.root}>
    <View style={styles.card}>
      <CrossIcon/>
      <Text style={styles.text}>Select color</Text>
      <Text style={styles.hint}>Please select your color to add this item in your cart</Text>
      <Pressable onPress={handlePressOk} style={styles.container}>
        <Text style={styles.title}>OK</Text>
      </Pressable>
    </View>
    </View>
  );
}
