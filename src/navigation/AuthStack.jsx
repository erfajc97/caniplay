import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/authScreens/Login';
import SignUp from '../Screens/authScreens/SignUp';

const AuthStack = () => {
  const Auth = createStackNavigator();
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Auth.Screen name="login" component={Login} />
      <Auth.Screen name="signup" component={SignUp} />
    </Auth.Navigator>
  );
};

export default AuthStack;
