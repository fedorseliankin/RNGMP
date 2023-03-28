import {View, Image, Text, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#008ACE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {
    width: 25,
    height: 25,
    margin: 19,
  },
  title: {
    color: 'white',
    fontWeight: '500',
    lineHeight: 20,
    fontSize: 20,
    fontFamily: 'System',
  },
});
export const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../../../assets/icons/Menu.png')}
        style={styles.menu}
      />
      <Text style={styles.title}>ECommerce store</Text>
      <Image
        source={require('../../../../assets/icons/Cart.png')}
        style={styles.menu}
      />
    </View>
  );
};
