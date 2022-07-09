import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default StyleSheet.create({
  game: {
    flex: 1,

    marginHorizontal: 24,
    paddingTop: 50,
  },

  game__title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",

    color: colors.yellow,

    marginBottom: 24,
    padding: 16,

    borderWidth: 2,
    borderColor: colors.yellow,
  },

  game__number: {
    // borderWidth: 4,
    // borderColor: colors.violetLight,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  game__number_text: {
    fontSize: 64,
    color: colors.white,
    fontWeight: "bold",
  },

  game__hint_text: {
    textAlign: "center",
    color: colors.white,
    fontSize: 24,
    marginBottom: 24,
  },

  game__buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 24,
  },

  game__buttons_item: {
    flex: 1,
  },
});
