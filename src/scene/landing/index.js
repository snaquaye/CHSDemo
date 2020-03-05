import React from "react";
import { StyleSheet, View } from "react-native";
import { Layout, Button } from "@ui-kitten/components";
import { globalStyles } from "../../styles/global-styles";
import { Logo } from "../../components/logo";

export const Landing = () => {
  return (
    <Layout style={globalStyles.body}>
      <View style={[globalStyles.centeredContainer, globalStyles.container]}>
        <Logo style={globalStyles.logo} />
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

const styles = StyleSheet.create({});
