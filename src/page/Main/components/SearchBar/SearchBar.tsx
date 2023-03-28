import React from 'react';
import {TextInput, Image, StyleSheet, View} from 'react-native';

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
export const SearchBar = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <Image
          source={require('../../../../assets/icons/Search.png')}
          style={styles.imageStyle}
        />
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};
