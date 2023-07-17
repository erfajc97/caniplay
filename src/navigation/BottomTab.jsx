import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screens/Profile';
import Settings from '../Screens/Settings';
import { AntDesign } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import { colors } from '../constants/colors';
import PlayLIstFav from '../Screens/PlayLIstFav';
import SearchMusic from '../Screens/SearchMusic';

const BottomTab = () => {
  const BtnTab = createBottomTabNavigator();

  return (
    <BtnTab.Navigator
      screenOptions={{
        headerShown: false,
        title: '',
        tabBarStyle: {
          backgroundColor: 'rgba(0,0,0,0.2)',
          position: 'absolute',
          shadowOpacity: 4,
          shadowRadius: 4,
          elevation: 0.5,
          borderTopWidth: 0,
          paddingTop: 13,
          left: 0,
          bottom: 0,
          right: 0,
          shadowOffset: {
            width: 0,
            height: -4,
          },
        },
      }}
    >
      <BtnTab.Screen
        name="Root"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="home" size={24} color={colors.secundary} />
            ) : (
              <AntDesign name="home" size={24} color={'white'} />
            ),
        }}
      />
      <BtnTab.Screen
        name="Favorite"
        component={PlayLIstFav}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="hearto" size={24} color={colors.secundary} />
            ) : (
              <AntDesign name="hearto" size={24} color={'white'} />
            ),
          // headerShown: true,
        }}
      />
      <BtnTab.Screen
        name="Search"
        component={SearchMusic}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="search1" size={24} color={colors.secundary} />
            ) : (
              <AntDesign name="search1" size={24} color={'white'} />
            ),
          // headerShown: true,
        }}
      />
      <BtnTab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="setting" size={24} color={colors.secundary} />
            ) : (
              <AntDesign name="setting" size={24} color={'white'} />
            ),
        }}
      />
    </BtnTab.Navigator>
  );
};

export default BottomTab;
