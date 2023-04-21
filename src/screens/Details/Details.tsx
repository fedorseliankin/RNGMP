import { useState, useCallback } from 'react';
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useGetProductsQuery} from 'redux/products.slice';
import { AddButton, ImageCarousel } from './components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { styles } from './styles';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

type RootSackParamList = {
  Main: undefined;
  Details: {id: string}; 
  DetailsStack: {id: string}; 
  ProductAdded: undefined;
}

type DetailsPageProps = {
  navigation: NativeStackNavigationProp<RootSackParamList, 'Details'>;
  route: RouteProp<RootSackParamList, 'Details'>;
}

export const Details = ({route, navigation}:  DetailsPageProps) => {
  const {data} = useGetProductsQuery({id: route.params.id});
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

  const handlePressAdd = () => {
    navigation.navigate('ProductAdded');
  }
  return (
    <View style={styles.layout}>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ImageCarousel imgs={imgs} />
        <View style={styles.section}>
          <Text style={[styles.title, styles.text]}>{product?.attributes.name}</Text>
          <Text style={[styles.price, styles.text]}>
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
          <Text style={[styles.description, styles.text]}>
            {product?.attributes.description ?? ''}
          </Text>
        </View>
      </ScrollView>
      <AddButton title="Add to Cart" onPress={handlePressAdd}/>
    </View>
  );
};
