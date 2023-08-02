import { Text, View, Image } from 'react-native';
import { globalStyle } from '../../styles/global';
import Inputs from '../../Components/Inputs';
import Button from '../../Components/Button';
import { colors } from '../../constants/colors';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { signIn } from '../../feactures/auth/auth';

export default function EnterLogin() {
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
    <View
      className="bg-black flex justify-evenly gap-y-14"
      style={globalStyle.screenContainer}
    >
      <Image
        className="w-40 h-40  "
        source={require('../../../assets/logo1.png')}
      />
      <View className="mb-10">
        <Text className="" style={[globalStyle.title, { color: 'white' }]}>
          C A N I P L A Y
        </Text>
        <Text className="text-white text-center"> Created by CaniStore </Text>
      </View>
      <Button
        margenT={'8%'}
        width={'90%'}
        altura={45}
        flex={'row'}
        bgBotton={colors.primary}
        title={'Login'}
        redondo={20}
        colortext={colors.ligth}
        borderColor={colors.green}
        navegar={'login'}
      />
      <Button
        margenT={'3%'}
        width={'90%'}
        altura={45}
        flex={'row'}
        bgBotton={colors.primary}
        title={'Sign Up'}
        redondo={20}
        navegar={'signUp'}
        colortext={colors.ligth}
        borderColor={colors.green}
      />
    </View>
  );
}
