import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
// import Settings from '../Screens/Settings';
import { AntDesign } from '@expo/vector-icons';
import HomeStack from './HomeStack';

const BottomTab = () => {
  const BtnTab = createBottomTabNavigator();

  return (
    <BtnTab.Navigator screenOptions={{ headerShown: false }}>
      <BtnTab.Screen
        name="Root"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <BtnTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
      {/* <BtnTab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" size={24} color={color} />
          ),
        }}
      /> */}
    </BtnTab.Navigator>
  );
};

export default BottomTab;
