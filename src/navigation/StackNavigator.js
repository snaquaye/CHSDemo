import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Landing } from "../scene/landing";
import { SignUp } from "../scene/signup";
import { Login } from "../scene/login";

const Stack = createStackNavigator();

export const StackNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Landing" component={Landing} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);
