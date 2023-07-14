import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStack />
      {/* <BottomTab /> */}
    </NavigationContainer>
  );
};

export default RootNavigator;
