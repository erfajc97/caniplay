import { NavigationContainer } from '@react-navigation/native';
// import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { restoreToken } from '../feactures/auth/auth';
import { useEffect } from 'react';
import Splash from '../Screens/Splash';
import BottomTab from './BottomTab';

const RootNavigator = () => {
  const { userToken, isLoading } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    getValue();
  }, []);

  async function getValue() {
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value !== null) {
        console.log('Data restored', value);
        dispatch(restoreToken(value));
      } else {
        dispatch(restoreToken(null));
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoading) return <Splash />;

  return (
    <NavigationContainer>
      {userToken ? <BottomTab /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
