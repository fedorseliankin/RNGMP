import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import SearchIcon from '../../../../assets/icons/Search.svg'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 20,
  },
  textInput: {
    flex: 1,
  },
});

type TSearchBarProps = {
  onChange?: (value: string) => void;
  searchValue?: string;
}
export const SearchBar = ({onChange, searchValue}: TSearchBarProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <SearchIcon style={styles.imageStyle}/>
        <TextInput
          value={searchValue}
          onChangeText={onChange}
          style={styles.textInput}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};
