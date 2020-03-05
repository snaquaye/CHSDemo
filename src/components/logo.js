import React from "react";
import { Image, StyleSheet } from "react-native";
import PropType from "prop-types";

export const Logo = props => {
  const logoStyle = props.style || styles.logo;

  return <Image style={logoStyle} source={require("../../assets/logo.jpg")} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 106,
    height: 97
  }
});

Logo.propTypes = {
  style: PropType.object
};
