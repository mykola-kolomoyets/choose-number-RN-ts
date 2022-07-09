import { StyleSheet } from "react-native";

import { colors } from "../../styles/colors";

export default StyleSheet.create({
  button: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 28,
  },

  button_container: {
    margin: 4,
    overflow: "hidden",
  },

  button__text: {
    color: colors.white,
    textAlign: "center",
    fontSize: 18,
  },

  button_ripple: {
    color: colors.violetLight,
  },

  button__primary: {
    backgroundColor: colors.violet,
    elevation: 2,
  },

  button__primary_text: {
    fontWeight: "bold",
  },

  button__secondary: {
    borderWidth: 1,
    borderColor: colors.white,
  },

  button__secondary_text: {},

  button__primary_pressed: {
    opacity: 0.75,
  },

  button__secondary_pressed: {
    opacity: 0.75,
  },
});
