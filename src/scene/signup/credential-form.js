import { Button, Icon, Input, Text } from "@ui-kitten/components";
import { Formik } from "formik";
import React, { useState } from "react";
import { Alert, KeyboardAvoidingView } from "react-native";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .required()
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6)
    .label("Password")
});

export const CredentialForm = props => {
  let passwordField;

  const formValue = {
    email: "",
    password: ""
  };

  const [isPasswordVisible, setPasswordVisiblity] = useState(false);

  const renderIcon = style => (
    <Icon name={isPasswordVisible ? "eye-off" : "eye"} {...style} />
  );

  const submitForm = values => {
    props.submitForm(values);
  };

  return (
    <Formik initialValues={formValue} onSubmit={submitForm}>
      {props => (
        <KeyboardAvoidingView>
          <Text category="h3">User Credential Form</Text>
          <Input
            label="Email"
            placeholder="Email"
            value={props.values.email}
            status={
              props.touched.email && props.errors.email ? "danger" : "success"
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
            secureTextEntry={isPasswordVisible}
            onSubmitEditing={props.handleSubmit}
            ref={field => (passwordField = field)}
          />
          <Button status="success" onPress={props.handleSubmit}>
            NEXT
          </Button>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};
