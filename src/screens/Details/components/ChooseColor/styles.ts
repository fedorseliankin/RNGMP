import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    elevation: 8,
    backgroundColor: '#008ACE',
    borderRadius: 4,
    height: 40,
    width: 130,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: '5%',
    marginBottom: '5%',
  },
  text: {
    color: '#8F8F8F',
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: '700',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  root: {
    flex: 1,
    zIndex:140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000050',
  },
  card: {
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    width: '90%',
    elevation: 4,
    padding: 16,
    borderRadius: 5,
  },
  hint: {
    fontSize: 15,
    lineHeight: 20,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#8F8F8F',
    width: 200,
    paddingBottom: 20
  }
})