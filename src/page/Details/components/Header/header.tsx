import {View, Image, StyleSheet} from 'react-native';
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
  like: {
    left: 110,
  },
});
export const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../../../assets/icons/backArrow.png')}
        style={styles.menu}
      />
      <Image
        source={require('../../../../assets/icons/Like.png')}
        style={styles.like}
      />
      <Image
        source={require('../../../../assets/icons/Cart.png')}
        style={styles.menu}
      />
    </View>
  );
};
