import { Pressable, Text } from "react-native";
import { styles } from './styles';
import { TAddButtonProps } from "./types";

export const AddButton = ({title, onPress}: TAddButtonProps) => (
  <Pressable onPress={onPress} style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </Pressable>
);