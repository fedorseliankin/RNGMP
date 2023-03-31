import {View, Text, StyleSheet} from 'react-native';
import MenuIcon from '../../../../assets/icons/Menu.svg';
import CartIcon from '../../../../assets/icons/Cart.svg';
const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#008ACE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    margin: 19,
  },
  title: {
    color: 'white',
    fontWeight: '500',
    lineHeight: 20,
    fontSize: 20,
  },
});
export const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
      <MenuIcon style={styles.icon}/>
      <Text style={styles.title}>ECommerce store</Text>
      <CartIcon style={styles.icon}/>
    </View>
  );
};
