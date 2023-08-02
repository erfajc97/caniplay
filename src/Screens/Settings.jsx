import { Text, View, SafeAreaView } from 'react-native';
import { globalStyle } from '../styles/global';
import Button from '../Components/Button';
import { useDispatch } from 'react-redux';
import { signOut } from '../feactures/auth/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

export default function Settings() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const SingOut = async () => {
  //   await AsyncStorage.removeItem('@token');
  //   dispatch(signOut());
  //   navigate('signup');
  // };
  const navega = () => {
    navigation.navigate('Entre');
  };
  return (
    <SafeAreaView
      style={[
        globalStyle.screenContainer,
        { backgroundColor: `${colors.primary}` },
      ]}
    >
      <Text style={globalStyle.title}>Settings</Text>
      <Button
        title={'Profile'}
        colortext={`${colors.green}`}
        flex={'row'}
        icon={'user'}
        margenT={10}
        width={'50%'}
        altura={50}
        size={24}
        color={`${colors.green}`}
        navegar={'Profile'}
      />
      <Button
        title={'Sign Out'}
        colortext={`${colors.green}`}
        flex={'row'}
        icon={'log-out'}
        margenT={10}
        width={'50%'}
        altura={50}
        size={24}
        color={`${colors.green}`}
        onPress={navega}
      />
    </SafeAreaView>
  );
}
