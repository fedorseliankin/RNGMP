import { Pressable, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
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
})

type TAddButtonProps = {
  title: string;
  onPress?: () => {};
}

export const AddButton = ({title, onPress}: TAddButtonProps) => (
  <Pressable onPress={onPress} style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </Pressable>
);