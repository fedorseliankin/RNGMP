import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    elevation: 8,
    backgroundColor: '#008ACE',
    borderRadius: 4,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: '5%',
    marginBottom: '5%',
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
    width: 250,
    elevation: 4,
    padding: 16,
  },
})