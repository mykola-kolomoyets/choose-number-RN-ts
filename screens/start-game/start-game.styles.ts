import { StyleSheet } from "react-native";

import { colors } from "../../styles/colors";

export default StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,

    backgroundColor: colors.violetLight,

    borderRadius: 8,

    // android shadow
    elevation: 5,

    // iOS shadow
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  number_input: {
    height: 50,

    fontSize: 32,
    fontWeight: "bold",
    color: colors.yellow,

    borderBottomColor: colors.yellow,
    borderBottomWidth: 2,
    marginVertical: 8,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttons_inner: {
    flex: 1,
  },
});
