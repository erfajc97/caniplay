import { Text, View } from 'react-native';
import { globalStyle } from '../../styles/global';
import Inputs from '../../Components/Inputs';
import Button from '../../Components/Button';
import { colors } from '../../constants/colors';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { signIn } from '../../feactures/auth/auth';

export default function Login() {
  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  async function save(value) {
    try {
      await AsyncStorage.setItem('@token', value);
      dispatch(signIn(value));
      console.log('Data Saved');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View className="bg-black" style={globalStyle.screenContainer}>
      <Text className="mb-2" style={[globalStyle.title, { color: 'white' }]}>
        Login
      </Text>
      <Inputs
        color={colors.green}
        label={'Email'}
        value={token}
        onChangeText={setToken}
      />
      <Inputs color={colors.green} label={'Password'} secureTextEntry />
      <Button
        margenT={'8%'}
        width={'90%'}
        altura={45}
        flex={'row'}
        bgBotton={colors.primary}
        title={'Sign In'}
        redondo={8}
        // onPress={() => save(token)}
        colortext={colors.ligth}
        borderColor={colors.green}
        navegar={'SongDeatil'}
      />
      <Button
        margenT={'3%'}
        width={'90%'}
        altura={45}
        flex={'row'}
        bgBotton={colors.primary}
        title={'Sign Up'}
        redondo={8}
        navegar={'signUp'}
        colortext={colors.ligth}
        borderColor={colors.green}
      />
    </View>
  );
}
