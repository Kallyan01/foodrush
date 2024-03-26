import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/EntryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entry">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Entry" component={ LoginScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

