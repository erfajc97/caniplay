import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../Screens/Settings';
// import BottomTab from './BottomTab';
import Home from '../Screens/Home';

export default function HomeStack() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Group screenOptions={{ headerShown: true }}>
        <HomeStack.Screen name="Settings" component={Settings} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}
