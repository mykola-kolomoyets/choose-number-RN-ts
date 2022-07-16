import { StyleSheet } from "react-native";

import { colors } from "../../styles/colors";

export default StyleSheet.create({
  root_container: {
    marginHorizontal: 24,
  },
  container: {
    padding: 16,
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

  start__game_title: {
    marginVertical: 30,
  },

  start__game_title_text: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "open-sans-bold",

    color: colors.yellow,

    marginBottom: 24,
    padding: 16,

    borderWidth: 2,
    borderColor: colors.yellow,
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
