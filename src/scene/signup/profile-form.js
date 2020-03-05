import React, { useState } from "react";
import { Input, Button } from "@ui-kitten/components";
import { View, TextInput, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

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

export const ProfileForm = () => {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: ""
  });

  const handleSubmit = values => {
    Alert.alert("Form Submitted", JSON.stringify(values));
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={formValue}
      onSubmit={handleSubmit}
    >
      {props => (
        <View>
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
              onChange={props.handleChange("firstName")}
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
              onChange={props.handleChange("lastName")}
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
            onChange={props.handleChange("phoneNumber")}
          />
          <Button status="success" onPress={props.handleSubmit}>
            SIGN UP
          </Button>
        </View>
      )}
    </Formik>
  );
};
