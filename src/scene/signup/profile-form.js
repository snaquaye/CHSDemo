import React, { useState } from "react";
import { Input, Button, Text } from "@ui-kitten/components";
import {
  View,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { globalStyles } from "../../styles/global-styles";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required()
    .min(2)
    .max(30)
    .label("First Name"),
  lastName: Yup.string()
    .required()
    .min(2)
    .max(30)
    .label("Last Name"),
  phoneNumber: Yup.string()
    .required()
    .min(6)
    .max(15)
    .label("Phone Number")
});

export const ProfileForm = props => {
  let lastNameField, phoneNumberField;

  const formValue = {
    firstName: "",
    lastName: "",
    phoneNumber: ""
  };

  return (
    <Formik
      initialValues={formValue}
      onSubmit={values => props.submitForm(values)}
    >
      {props => (
        <KeyboardAvoidingView>
          <Text category="h3">User Profile Form</Text>
          <View style={globalStyles.row}>
            <Input
              label="First Name"
              placeholder="First Name"
              value={props.values.firstName}
              status={
                props.touched.firstName && props.errors.firstName
                  ? "danger"
                  : "success"
              }
              caption={
                props.touched.firstName && props.errors.firstName
                  ? props.errors.firstName
                  : ""
              }
              onChangeText={props.handleChange("firstName")}
              style={styles.input}
              onSubmitEditing={() => lastNameField.focus()}
            />
            <Input
              label="Last Name"
              placeholder="Last Name"
              value={props.values.lastName}
              status={
                props.touched.lastName && props.errors.lastName
                  ? "danger"
                  : "success"
              }
              caption={
                props.touched.lastName && props.errors.lastName
                  ? props.errors.lastName
                  : ""
              }
              onChangeText={props.handleChange("lastName")}
              style={[globalStyles.gutter, styles.input]}
              ref={field => (lastNameField = field)}
              onSubmitEditing={() => phoneNumberField.focus()}
            />
          </View>
          <Input
            label="Phone Number"
            placeholder="Phone Number"
            value={props.values.phoneNumber}
            status={
              props.touched.phoneNumber && props.errors.phoneNumber
                ? "danger"
                : "success"
            }
            caption={
              props.touched.phoneNumber && props.errors.phoneNumber
                ? props.errors.phoneNumber
                : ""
            }
            onChangeText={props.handleChange("phoneNumber")}
            ref={field => (phoneNumberField = field)}
            onSubmitEditing={props.handleSubmit}
          />
          <Button status="success" onPress={props.handleSubmit}>
            SIGN UP
          </Button>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "50%"
  }
});
