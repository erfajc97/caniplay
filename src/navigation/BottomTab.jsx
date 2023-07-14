import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import { AntDesign } from '@expo/vector-icons';

const BottomTab = () => {
  const BtnTab = createBottomTabNavigator();

  return (
    <BtnTab.Navigator>
      <BtnTab.Screen
        name="Home"
        component={Home}
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
    </BtnTab.Navigator>
  );
};

export default BottomTab;
