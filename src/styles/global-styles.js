import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    backgroundColor: "#FFF",
    paddingLeft: 34,
    paddingRight: 34,
    flex: 1
  },
  centeredContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bottomPadding: {
    paddingBottom: 20
  },
  gutter: {
    marginLeft: 10
  },
  title: { fontSize: 20 },
  centerContent: {
    alignContent: "center"
  },
  redBackground: {
    backgroundColor: "red"
  },
  greenBackground: {
    backgroundColor: "green"
  },
  shadow: {
    shadowColor: "#000000",
    shadowOpacity: 0.16,
    shadowOffset: {
      height: 0,
      width: 3
    }
  }
});
