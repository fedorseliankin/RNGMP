import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useGetProductsQuery} from '../../redux/products.slice';
import {ImageCarousel} from './components/Carousel';
import {Header} from './components/Header/header';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const styles = StyleSheet.create({
  productList: {
    flex: 1,
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 20,
    'productList:first-child': {
      marginTop: 25,
    },
  },
  title: {
    fontFamily: 'System',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
    paddingBottom: 10,
  },
  price: {
    fontFamily: 'System',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 20,
  },
  section: {
    width: '90%',
    borderBottomColor: 'rgba(0,0,0,0.3)',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 10,
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#008ACE',
    borderRadius: 4,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: '5%',
    marginBottom: '5%',
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  descriptionTitle: {
    fontSize: 20,
    color: '#4A4A4A',
    fontWeight: '700',
    lineHeight: 25,
    paddingBottom: 10,
  },
  description: {
    fontFamily: 'System',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
  },
  selectItem: {
    backgroundColor: '#F7F7F7',
    width: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  layout: {
    height: '100%',
    backgroundColor: 'white',
  },
});

const AppButton = ({onPress, title}: {onPress?: () => void; title: string}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export const Details = () => {
  const {data} = useGetProductsQuery();
  const product = data?.data[0];

  const imgs = [
    {url: 'https://picsum.photos/250/250'},
    {url: 'https://picsum.photos/250/250'},
    {url: 'https://picsum.photos/250/250'},
    {url: 'https://picsum.photos/250/250'},
  ];
  return (
    <View style={styles.layout}>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <ImageCarousel imgs={imgs} />
          <View style={styles.section}>
            <Text style={styles.title}>{product?.attributes.name}</Text>
            <Text style={styles.price}>
              {product?.attributes.display_price}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.descriptionTitle}>Selext Type</Text>
            <View style={styles.selectItem}>
              <Text>blue</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.description}>
              {product?.attributes.description ?? ''}
            </Text>
          </View>
        </View>
      </ScrollView>
      <AppButton title="Add to Cart" />
    </View>
  );
};
