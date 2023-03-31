import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {Header} from './components/Header/header';
import {SearchBar} from './components/SearchBar/SearchBar';
import {Card} from './components/Card/Card';
import {useGetProductsQuery} from '../../redux/products.slice';
import { useCallback, useState } from 'react';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  productList: {
    marginTop: 20,
    'productList:first-child': {
      marginTop: 25,
    },
  },
});
export const MainPage = () => {
  const [searchValue, onChangeSearchValue] = useState('');
  const {data, isFetching, refetch} = useGetProductsQuery(searchValue);
  const onRefresh = useCallback(() => {
    refetch();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar searchValue={searchValue} onChange={onChangeSearchValue}/> 
      <FlatList
        contentContainerStyle={styles.productList}
        refreshControl={<RefreshControl refreshing={isFetching} onRefresh={onRefresh} />}
        data={data?.data}
        keyExtractor={product => product.id}
        renderItem={({item}) => <Card product={item} />}
        numColumns={2}
        scrollEnabled={true}
      />
    </View>
  );
};
