import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';

const RootNavigator = () => {
  const { userToken, isLoading } = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      {userToken ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
