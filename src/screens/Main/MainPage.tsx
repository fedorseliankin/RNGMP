import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {SearchBar} from './components/SearchBar/SearchBar';
import {Card} from './components/Card/Card';
import {useGetProductsQuery} from '../../redux/products.slice';
import { useCallback, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  productList: {
    marginTop: 20,
  },
});

type MainPageProps = {
  navigation: NativeStackNavigationProp<RootSackParamList, 'Main'>;
}

export const MainPage = ({navigation}: MainPageProps) => {
  const [searchValue, onChangeSearchValue] = useState('');
  const {data, isFetching, refetch} = useGetProductsQuery({name: searchValue});
  const onRefresh = useCallback(() => {
    refetch();
  }, [refetch]);
  const handlePress = (id: string) => {
    navigation.navigate('DetailsStack', {id: id});
  }
  return (
    <View style={styles.container}>
      <SearchBar searchValue={searchValue} onChange={onChangeSearchValue}/> 
      <FlatList
        contentContainerStyle={styles.productList}
        refreshControl={<RefreshControl refreshing={isFetching} onRefresh={onRefresh} />}
        data={data?.data}
        renderItem={({item}) => <Card product={item} onPress={() => handlePress(item.id)}/>}
        numColumns={2}
      />
    </View>
  );
};
