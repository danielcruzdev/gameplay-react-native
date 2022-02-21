import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/home";
import { SignIn } from "../screens/sign-in";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
      headerMode: 'screen',
      cardStyle: {
        backgroundColor: 'transparent',
      }
    }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
