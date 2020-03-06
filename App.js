import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  StatusBarIOS
} from "react-native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { globalStyles } from "./src/styles/global-styles";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./src/navigation/StackNavigator";

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
            <StackNavigator />
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
