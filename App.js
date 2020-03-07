import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import React from "react";
import { Platform, StatusBar, StatusBarIOS, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "./src/styles/global-styles";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./src/navigation/app.navigator";

const renderStatusBar = () => {
  if (Platform.OS === "android") {
    return <StatusBar backgroundColor="blue" />;
  }

  if (Platform.OS === "ios") {
    return <StatusBarIOS />;
  }
};

export default function App() {
  return (
    <SafeAreaProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={globalStyles.container}>
          {renderStatusBar()}
          <IconRegistry icons={EvaIconsPack} />
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  statusBar: {
    backgroundColor: "#FF685D"
  }
});
