import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Landing } from "../scene/landing";
import { Login } from "../scene/login";
import { SignUp } from "../scene/signup";

const Stack = createStackNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Landing" component={Landing} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);
