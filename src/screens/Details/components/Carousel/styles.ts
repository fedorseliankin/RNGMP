import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 0,
  },
  containerStyle: {
    margin: 0,
  },
  carousel: {
    width: 250,
  },
  dotContainerStyle: {
    marginVertical: 0,
    marginHorizontal: 3,
  },
  layout: {
    marginTop: 45,
  },
  icon: {
    width: 25,
    height: 25,
  },
  image: {
    width: 250,
    height: 250,
  },
  inactiveDotStyle: {
    backgroundColor: '#C3C3C3',
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#008ACE',
  },
});