import React from "react";
import { StyleSheet, View } from "react-native";
import { Layout, Button } from "@ui-kitten/components";
import { globalStyles } from "../../styles/global-styles";
import { Logo } from "../../components/logo";

export const Landing = () => {
  return (
    <Layout style={globalStyles.body}>
      <View style={[styles.logoContainer, globalStyles.container]}>
        <Logo style={styles.logo} />
      </View>
      <View>
        <Button status="success">LOGIN</Button>
        <Button status="success" appearance="ghost">
          Don't have an account? Sign up!
        </Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 106,
    height: 97
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center"
  }
});
