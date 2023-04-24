// import { Text } from "react-native-svg";
import BoxIcon from '@icons/Box.svg';
import { View, Text, Pressable } from "react-native";
import { useCreateAccaountMutation } from 'redux/products.slice';

export const MyCart = () => {
  const [createAccount, {isError, isLoading}] = useCreateAccaountMutation();
  const handleCreateAccount = () => {
    const a = createAccount({
      "email": "joh123n@snow.org",
      "first_name": "John",
      "last_name": "Snow",
      "selected_locale": "en",
      "password": "spree123",
      "password_confirmation": "spree123",
      "public_metadata": {
        "user_segment": "supplier"
      },
      "private_metadata": {
        "has_abandoned_cart": false
      }
    })
      .unwrap()
      .then(
        data => {
          console.log(data.data);
        }
      )
  }
  return <View>
    <Text>Ecomerce Store</Text>
    <BoxIcon />
    <Text style={{color: 'red'}}>Ecomerce Store</Text>
    {/* <Button onPress={handleCreateAccount} title='Create Accaunt'> */}
    <Pressable onPressIn={handleCreateAccount}><Text> Create Accaunt</Text></Pressable>
  </View>;
};