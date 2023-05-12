import { useState } from 'react';
import { View, Text } from "react-native";
import { useCreateAccaountMutation } from 'redux/products.slice';
import Input from './components/Input/Input';
import { AddButton } from 'components/AddButton';

export const MyCart = () => {
  const [createAccount] = useCreateAccaountMutation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassord] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const handleCreateAccount = () => {
    createAccount({
      "email": email,
      "first_name": fullName.split(' ')[0],
      "last_name": fullName.split(' ')[1] || '',
      "selected_locale": "en",
      "password": password,
      "password_confirmation": confPassword,
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
    <Text style={{color: 'red'}}>Ecomerce Store</Text>
    <Input
      value={fullName}
      onValueChange={setFullName}
      placeholder='Text'
      label='Full Name' 
    />
    <Input
      value={email}
      onValueChange={setEmail}
      placeholder='Text'
      label='Email Address' 
    />
    <Input
      value={password}
      onValueChange={setPassord}
      placeholder='Text'
      label='Password' 
    />
    <Input
      value={confPassword}
      onValueChange={setConfPassword}
      placeholder='Text'
      label='Confirm Password' 
    />

    <AddButton onPress={handleCreateAccount} title='Sing UP'/>
  </View>;
};