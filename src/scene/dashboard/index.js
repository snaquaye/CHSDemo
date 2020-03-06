import React from "react";
import {
  Layout,
  TopNavigation,
  TopNavigationAction,
  Icon,
  Text,
  List
} from "@ui-kitten/components";
import { globalStyles } from "../../styles/global-styles";
import { View } from "react-native";
import { SummaryBox } from "../../components/summary-box";

export const DashBoard = props => {
  const renderMenuIcon = style => <Icon name="menu" {...style} />;
  const renderLeftControl = () => <TopNavigationAction icon={renderMenuIcon} />;

  return (
    <Layout style={globalStyles.container}>
      <TopNavigation
        leftControl={renderLeftControl()}
        title="My Complains"
        titleStyle={globalStyles.title}
        alignment="center"
      />
      <View style={[globalStyles.container, globalStyles.body]}>
        <View style={[globalStyles.row]}>
          <SummaryBox
            title="Pending"
            value="100"
            style={[globalStyles.redBackground, globalStyles.shadow]}
          />
          <SummaryBox
            title="Resolved"
            value="100"
            style={[globalStyles.greenBackground, globalStyles.shadow]}
          />
        </View>
        <List />
      </View>
    </Layout>
  );
};
