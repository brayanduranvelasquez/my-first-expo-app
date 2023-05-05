import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import HomeView from "./src/views/HomeView";
import DestinationView from "./src/views/DestinationView";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeView}
              options={{ title: "Home", headerShown: false }}
            />
            <Stack.Screen
              name="Destination"
              component={DestinationView}
              options={{ title: "Destination", headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
