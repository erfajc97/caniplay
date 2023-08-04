import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../Screens/Settings';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import ArtistsProfile from '../Screens/ArtistsProfile';
import SongDetail from '../Screens/SongDetail';
import { Entypo } from '@expo/vector-icons';
import { Text, Pressable } from 'react-native';
import { colors } from '../constants/colors';
import Login from '../Screens/authScreens/Login';
import SignUp from '../Screens/authScreens/SignUp';
import EnterLogin from '../Screens/authScreens/EnterLogin';

export default function HomeStack({ navigation }) {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Group screenOptions={{ headerShown: true }}>
        <HomeStack.Screen
          options={{
            headerRight: () => (
              <Pressable onPress={() => navigation.openDrawer()}>
                <Text className="mr-5 mt-5">
                  <Entypo name="menu" size={34} color={colors.green} />
                </Text>
              </Pressable>
            ),
            title: '',
            headerStyle: {
              backgroundColor: '#000000',
            },
          }}
          name="SongDeatil"
          component={SongDetail}
        />
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen
          options={{ headerShown: false }}
          name="Entre"
          component={EnterLogin}
        />
        <HomeStack.Screen name="Settings" component={Settings} />
        <HomeStack.Screen name="Profile" component={Profile} />
        <HomeStack.Screen name="ArtistProfile" component={ArtistsProfile} />
        <HomeStack.Screen
          options={{ headerShown: false }}
          name="login"
          component={Login}
        />
        <HomeStack.Screen
          options={{ headerShown: false }}
          name="signUp"
          component={SignUp}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}
