import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/SplashScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import SignInScreen from "./screens/SignInScreen";
import NumberScreen from "./screens/NumberScreen";
import VerificationScreen from "./screens/VerificationScreen";

// Import thêm 3 màn hình mới
import SelectLocationScreen from "./screens/SelectLocationScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="NumberScreen" component={NumberScreen} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />

        {/* Thêm 3 màn hình mới */}
        <Stack.Screen name="SelectLocation" component={SelectLocationScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
