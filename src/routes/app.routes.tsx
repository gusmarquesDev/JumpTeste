import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../HomeScreen";
import { DetailScreen } from "../DetailScreen";

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}
