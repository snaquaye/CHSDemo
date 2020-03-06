import React, { useState } from "react";
import { Formik } from "formik";
import { KeyboardAvoidingView, View } from "react-native";
import {
  Text,
  Input,
  Button,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction
} from "@ui-kitten/components";
import { Logo } from "../../components/logo";
import { globalStyles } from "../../styles/global-styles";

export const Login = props => {
  let passwordField;
  const formValue = {
    email: "",
    password: ""
  };

  const [isPasswordVisible, setPasswordVisiblity] = useState(false);

  const submitForm = values => {
    console.log(values);
  };

  const renderIcon = style => (
    <Icon name={isPasswordVisible ? "eye" : "eye-off"} {...style} />
  );

  const renderBackIcon = style => <Icon name="arrow-back" {...style} />;

  const renderBackAction = () => <TopNavigationAction icon={renderBackIcon} />;

  return (
    <Layout style={globalStyles.container}>
      <TopNavigation leftControl={renderBackAction()} />
      <View style={[globalStyles.container, globalStyles.centeredContainer]}>
        <Logo />
        <Text category="h3">Sign In Form</Text>
      </View>
      <View style={[globalStyles.container, globalStyles.body]}>
        <Formik
          initialValues={formValue}
          onSubmit={values => submitForm(value)}
        >
          {props => (
            <KeyboardAvoidingView>
              <Input
                label="Email"
                placeholder="Email"
                value={props.values.email}
                status={
                  props.touched.email && props.errors.email
                    ? "danger"
                    : "success"
                }
                autoCapitalize="none"
                keyboardType="email-address"
                caption={
                  props.touched.email && props.errors.email
                    ? props.errors.email
                    : ""
                }
                onChangeText={props.handleChange("email")}
                returnKeyType="next"
                onSubmitEditing={() => passwordField.focus()}
              />
              <Input
                label="Password"
                placeholder="Password"
                value={props.values.password}
                status={
                  props.touched.password && props.errors.password
                    ? "danger"
                    : "success"
                }
                autoCapitalize="none"
                caption={
                  props.touched.password && props.errors.password
                    ? props.errors.password
                    : ""
                }
                onChangeText={props.handleChange("password")}
                icon={renderIcon}
                onIconPress={() => setPasswordVisiblity(!isPasswordVisible)}
                secureTextEntry={!isPasswordVisible}
                onSubmitEditing={props.handleSubmit}
                ref={field => (passwordField = field)}
              />
              <Button status="success" onPress={props.handleSubmit}>
                NEXT
              </Button>
            </KeyboardAvoidingView>
          )}
        </Formik>
      </View>
    </Layout>
  );
};
