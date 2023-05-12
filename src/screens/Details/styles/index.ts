import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  productList: {
    flex: 1,
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
  },
  title: {
    paddingBottom: 10,
  },
  price: {
    fontWeight: '700',
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
  },
  selectItem: {
    backgroundColor: '#F7F7F7',
    width: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  layout: {
    height: '100%',
  },
});