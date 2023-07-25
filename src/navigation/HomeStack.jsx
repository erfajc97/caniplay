import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../Screens/Settings';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import ArtistsProfile from '../Screens/ArtistsProfile';
import SondDetail from '../Screens/SondDetail';

export default function HomeStack() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Group>
        <HomeStack.Screen name="Settings" component={Settings} />
        <HomeStack.Screen name="Profile" component={Profile} />
        <HomeStack.Screen name="ArtistProfile" component={ArtistsProfile} />
        <HomeStack.Screen name="SongDeatil" component={SondDetail} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}
