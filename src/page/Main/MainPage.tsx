import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {Header} from './components/Header/header';
import {SearchBar} from './components/SearchBar/SearchBar';
import {Card} from './components/Card/Card';
import {useGetProductsQuery} from '../../redux/products.slice';
import { useState, useCallback } from 'react';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
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
});
export const MainPage = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {data, refetch} = useGetProductsQuery();
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      {data && (
        <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>  
          <View style={styles.productList}>
            {data.data.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};
