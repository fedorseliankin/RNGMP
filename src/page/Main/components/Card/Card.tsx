import {View, Image, Text, StyleSheet} from 'react-native';
import {TProduct} from '../../../../redux/types';

type TCardProps = {
  product: TProduct;
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: 158,
    height: 160,
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 10,
    padding: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  logo: {
    marginTop: 5,
    marginHorizontal: 25,
    width: 100,
    height: 100,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    width: 150,
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: 'System',
    overflow: 'hidden',
  },
  price: {
    fontWeight: '700',
    fontFamily: 'System',
    fontSize: 15,
    lineHeight: 20,
  },
  oldPrice: {
    fontWeight: '700',
    fontFamily: 'System',
    fontSize: 15,
    lineHeight: 20,
    color: '#8F8F8F',
    textDecorationLine: 'line-through',
  },
  discount: {
    fontWeight: '700',
    fontFamily: 'System',
    fontSize: 15,
    lineHeight: 20,
    color: '#00A8F3',
  },
});
export const Card = ({product}: TCardProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: `https://picsum.photos/id/${product.id}/100/100`,
        }}
      />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        {product.attributes.name}
      </Text>
      <View style={styles.details}>
        <Text style={styles.price}>{product.attributes.display_price}</Text>
        <Text style={styles.oldPrice}>
          {product.attributes.display_compare_at_price}
        </Text>
      </View>
    </View>
  );
};
