import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../Screens/Settings';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';

export default function HomeStack() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Group>
        <HomeStack.Screen name="Settings" component={Settings} />
        <HomeStack.Screen name="Profile" component={Profile} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}
