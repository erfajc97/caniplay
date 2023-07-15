import { Text, View } from 'react-native';
import { globalStyle } from '../styles/global';
import Button from '../Components/Button';
import { useDispatch } from 'react-redux';
import { signOut } from '../feactures/auth/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../constants/colors';

export default function Profile() {
  const dispatch = useDispatch();
  return (
    <View style={globalStyle.screenContainer}>
      <Text style={globalStyle.title}>Profile</Text>
      <Button
        title={'Sign Out'}
        colortext={`${colors.secundary}`}
        flex={'row'}
        icon={'log-out'}
        margenT={10}
        width={'50%'}
        altura={50}
        size={24}
        color={'blue'}
        onPress={async () => {
          await AsyncStorage.removeItem('@token');
          dispatch(signOut());
        }}
      />
    </View>
  );
}
