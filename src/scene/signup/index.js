import React from "react";
import {
  Layout,
  TopNavigation,
  TopNavigationAction,
  Icon
} from "@ui-kitten/components";
import { globalStyles } from "../../styles/global-styles";
import { View } from "react-native";

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  renderBackIcon = style => {
    return <Icon name="arrow-back" {...style} />;
  };

  renderBackAction = () => {
    return <TopNavigationAction icon={this.renderBackIcon} />;
  };

  render() {
    return (
      <Layout>
        <TopNavigation title="Sign Up" leftControl={this.renderBackAction()} />
        <View style={globalStyles.body}></View>
      </Layout>
    );
  }
}
