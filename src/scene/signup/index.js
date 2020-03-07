import React from "react";
import {
  Layout,
  TopNavigation,
  TopNavigationAction,
  Icon,
  Text
} from "@ui-kitten/components";
import { globalStyles } from "../../styles/global-styles";
import { View, StyleSheet, Alert } from "react-native";
import { Logo } from "../../components/logo";
import { CredentialForm } from "./credential-form";
import { ProfileForm } from "./profile-form";

export class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      formValues: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: ""
      }
    };
  }

  renderBackIcon = style => {
    return <Icon name="arrow-back" {...style} />;
  };

  renderBackAction = () => {
    return (
      <TopNavigationAction
        icon={this.renderBackIcon}
        onPress={() => this.props.navigation.goBack()}
      />
    );
  };

  mutateFormValue(values) {
    this.setState({ formValues: { ...this.state.formValues, ...values } });
  }

  submitForm(values) {
    let { step } = this.state;
    this.mutateFormValue(values);
    if (step === 1) {
      this.setState({ step: step + 1 });
    } else {
    }
  }

  render() {
    const form =
      this.state.step === 1 ? (
        <CredentialForm submitForm={values => this.submitForm(values)} />
      ) : (
        <ProfileForm submitForm={values => this.submitForm(values)} />
      );

    return (
      <Layout style={globalStyles.container}>
        <TopNavigation leftControl={this.renderBackAction()} />
        <View style={globalStyles.body}>
          <View style={[globalStyles.centeredContainer]}>
            <Logo />
            <Text category="h3">Create Account</Text>
          </View>
          <View style={globalStyles.container}>{form}</View>
        </View>
      </Layout>
    );
  }
}
