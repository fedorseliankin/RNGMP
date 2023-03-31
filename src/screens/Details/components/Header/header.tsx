import {View, StyleSheet} from 'react-native';
import BackArrow from '../../../../assets/icons/Arrow.svg';
import CartIcon from '../../../../assets/icons/Cart.svg';
import LikeIcon from '../../../../assets/icons/Like.svg';

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
  like: {
    left: 110,
  },
});
export const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
      <BackArrow style={styles.icon}/>
      <LikeIcon style={styles.like}/>
      <CartIcon style={styles.icon}/>
    </View>
  );
};
