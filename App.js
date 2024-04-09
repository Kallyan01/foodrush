import FloatingCart from "./components/FloatingCart";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/EntryScreen";
import { SERVER_URL } from "@env";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

export default function App() {
  process.env = {SERVER_URL,...process.env} ;
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Entry" component={ LoginScreen} />
    </Stack.Navigator>
        <View className="bg-red-500">
          <FloatingCart/>
        </View>
    </NavigationContainer>
  );
}

