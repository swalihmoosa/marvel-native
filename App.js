import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import Character from "./src/screens/Character";


const Stack = createStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="character" component={Character} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
