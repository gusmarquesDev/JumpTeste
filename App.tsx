import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { HomeScreen } from "./src/HomeScreen";
import { DetailScreen } from "./src/DetailScreen";
import { useFonts } from "expo-font";
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Routes } from "./src/routes";
import { CircularProgress } from "@mui/material";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  {
    !fontsLoaded ? <CircularProgress /> : null;
  }
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
