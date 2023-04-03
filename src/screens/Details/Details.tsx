import { useState, useCallback } from 'react';
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useGetProductsQuery} from '../../redux/products.slice';
import {ImageCarousel} from './components/Carousel';
import {Header} from './components/Header/header';
import { AddButton } from './components/AddButton';

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
    fontSize: 15,
    lineHeight: 20,
    paddingBottom: 10,
  },
  price: {
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
  descriptionTitle: {
    fontSize: 20,
    color: '#4A4A4A',
    fontWeight: '700',
    lineHeight: 25,
    paddingBottom: 10,
  },
  description: {
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


export const Details = () => {
  const {data} = useGetProductsQuery();
  const product = data?.data[0];
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const imgs = [
    {url: 'https://picsum.photos/250/250'},
    {url: 'https://picsum.photos/250/250'},
    {url: 'https://picsum.photos/250/250'},
    {url: 'https://picsum.photos/250/250'},
  ];
  return (
    <View style={styles.layout}>
      <Header />
      <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>  
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
      </ScrollView>
      <AddButton title="Add to Cart" />
    </View>
  );
};
