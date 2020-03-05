import React from "react";
import {
  Layout,
  TopNavigation,
  TopNavigationAction,
  Icon,
  Text
} from "@ui-kitten/components";
import { globalStyles } from "../../styles/global-styles";
import { View, StyleSheet } from "react-native";
import { Logo } from "../../components/logo";
import { CredentialForm } from "./credential-form";
import { ProfileForm } from "./profile-form";

export class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1
    };
  }

  renderBackIcon = style => {
    return <Icon name="arrow-back" {...style} />;
  };

  renderBackAction = () => {
    return <TopNavigationAction icon={this.renderBackIcon} />;
  };

  nextForm = () => {
    let { step } = this.state;
    this.setState({ step: step + 1 });
    alert(step);
  };

  render() {
    const form =
      this.state.step === 1 ? (
        <CredentialForm nextForm={this.nextForm} />
      ) : (
        <ProfileForm />
      );

    return (
      <Layout style={globalStyles.container}>
        <TopNavigation title="Sign Up" leftControl={this.renderBackAction()} />
        <View style={globalStyles.body}>
          <View style={[globalStyles.centeredContainer]}>
            <Logo />
          </View>
          <View>{form}</View>
        </View>
      </Layout>
    );
  }
}
