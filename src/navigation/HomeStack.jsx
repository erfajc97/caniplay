import { createStackNavigator } from "@react-navigation/stack";

import Settings from "../Screens/Settings";
import Home from "../Screens/Home";


export default function HomeStack() {
   const HomeStack = createStackNavigator();
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator>

    )
}