import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../Screens/Settings';
import BottomTab from './BottomTab';

export default function HomeStack() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Root" component={BottomTab} />
      <HomeStack.Group screenOptions={{ headerShown: true }}>
        <HomeStack.Screen name="Settings" component={Settings} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}
