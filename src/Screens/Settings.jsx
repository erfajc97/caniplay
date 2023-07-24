import { Text, View, SafeAreaView } from 'react-native';
import { globalStyle } from '../styles/global';
import Button from '../Components/Button';
import { useDispatch } from 'react-redux';
import { signOut } from '../feactures/auth/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../constants/colors';

export default function Settings() {
  const dispatch = useDispatch();
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
        colortext={`${colors.secundary}`}
        flex={'row'}
        icon={'user'}
        margenT={10}
        width={'50%'}
        altura={50}
        size={24}
        color={`${colors.secundary}`}
        navegar={'Profile'}
      />
      <Button
        title={'Sign Out'}
        colortext={`${colors.secundary}`}
        flex={'row'}
        icon={'log-out'}
        margenT={10}
        width={'50%'}
        altura={50}
        size={24}
        color={`${colors.secundary}`}
        onPress={async () => {
          await AsyncStorage.removeItem('@token');
          dispatch(signOut());
        }}
      />
    </SafeAreaView>
  );
}
