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
});
