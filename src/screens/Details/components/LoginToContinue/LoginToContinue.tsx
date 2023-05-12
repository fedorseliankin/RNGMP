import WarningIcon from '@icons/Warning.svg';
import { Pressable, Text, View } from 'react-native';
import {styles} from './styles';
import { LoginToContinueStackProps } from './types';

export const LoginToContinue = ({navigation}: LoginToContinueStackProps) => {
  const handlePressOk = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.root}>
    <View style={styles.card}>
      <WarningIcon/>
      <Text style={styles.text}>Login To Continue</Text>
      <Text style={styles.hint}>Please login to add product in your cart</Text>
      <View style={styles.buttonSection}>
        <Pressable onPress={handlePressOk} style={styles.container}>
          <Text style={styles.title}>Login</Text>
        </Pressable>
        <Pressable onPress={handlePressOk} style={styles.container}>
          <Text style={styles.title}>Sing up</Text>
        </Pressable>  
      </View>
    </View>
    </View>
  );
}
