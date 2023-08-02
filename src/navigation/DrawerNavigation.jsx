import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../Screens/Profile';
import Settings from '../Screens/Settings';
// import { AntDesign } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import { colors } from '../constants/colors';
// import { colors } from '../constants/colors';
// import PlayLIstFav from '../Screens/PlayLIstFav';
// import SearchMusic from '../Screens/SearchMusic';

const DrawerNavigation = () => {
  const DrawerTab = createDrawerNavigator();

  return (
    <DrawerTab.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: colors.green,
        drawerLabelStyle: {
          color: colors.green,
          fontWeight: 'bold',
          fontSize: 18,
          marginLeft: 15,
        },
        drawerStyle: {
          backgroundColor: '#191919',
        },
      }}
    >
      <DrawerTab.Screen
        options={{
          drawerPosition: 'right',
          title: '',
          drawerLabel: () => null,
          drawerActiveTintColor: 'black',
        }}
        name="Root"
        component={HomeStack}
      />
      <DrawerTab.Screen
        options={{ drawerPosition: 'right', title: 'PROFILE' }}
        name="Profile"
        component={Profile}
      />
      <DrawerTab.Screen
        options={{ drawerPosition: 'right', title: 'SETTINGS' }}
        name="Settings"
        component={Settings}
      />
    </DrawerTab.Navigator>
  );
};

export default DrawerNavigation;
