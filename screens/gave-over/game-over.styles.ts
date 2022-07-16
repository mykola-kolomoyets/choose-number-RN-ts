import { StyleSheet } from "react-native";

import { colors } from "../../styles/colors";

export default StyleSheet.create({
  game_over__container: {
    flex: 1,
    padding: 24,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  game_over__title: {
    marginVertical: 30,
    width: "100%",
  },

  game_over__title_text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",

    color: colors.yellow,

    marginBottom: 24,
    padding: 16,

    borderWidth: 2,
    borderColor: colors.yellow,
  },

  game_over__image: {
    alignContent: "center",
    justifyContent: "center",
    width: 350,
    height: 350,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: colors.white,
    overflow: "hidden",
  },

  game_over_image_picture: {
    width: "100%",
    height: "100%",
  },

  game_over__text: {
    marginVertical: 24,
    fontFamily: "open-sans-regular",
    fontSize: 24,
    textAlign: "center",
  },

  game_over__text_highlight: {
    fontFamily: "open-sans-bold",
    color: colors.violetLight,
  },
});
