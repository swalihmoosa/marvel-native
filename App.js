import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import Character from "./src/screens/Character";
import Comic from "./src/screens/Comic";


const Stack = createStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="character" component={Character} />
                <Stack.Screen name="comic" component={Comic} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
