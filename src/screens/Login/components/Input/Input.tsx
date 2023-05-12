import { View, Text, TextInput } from "react-native";
import {styles} from './styles';

type TInputProps = {
  label: string;
  value: string;
  placeholder: string;
  onValueChange: (value: string) => void;
}

const Input = ({
  label,
  value,
  placeholder,
  onValueChange,
}: TInputProps) => {
  return (
    <View>
      <View style={styles.labelContainer}>
        <Text>{label}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onValueChange}
          value={value}
        />
      </View>
    </View>
  );
}

export default Input;