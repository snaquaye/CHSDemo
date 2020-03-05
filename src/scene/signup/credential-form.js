import React, { useState } from "react";
import { Input, Button, Text } from "@ui-kitten/components";
import { View, TextInput, Alert } from "react-native";
import { Formik } from "formik";
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
  const [formValue, setFormValue] = useState({
    email: "",
    password: ""
  });
  const [isPasswordVisible, setPasswordVisiblity] = useState(false);

  const handleSubmit = values => {
    Alert.alert("Form Submitted", JSON.stringify(values));
    props.nextForm();
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={formValue}
      onSubmit={handleSubmit}
    >
      {props => (
        <View>
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
            onChange={props.handleChange("email")}
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
            onChange={props.handleChange("password")}
            secureTextEntry
          />
          <Button status="success" onPress={props.handleSubmit}>
            NEXT
          </Button>
        </View>
      )}
    </Formik>
  );
};
