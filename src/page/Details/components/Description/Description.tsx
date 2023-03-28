import {Text, View} from 'react-native';

type TDescriptionProps = {
  text: string;
};
export const DescriptionSection = ({text}: TDescriptionProps): JSX.Element => {
  return (
    <View>
      <Text>Description</Text>
      <Text>{text}</Text>
    </View>
  );
};
