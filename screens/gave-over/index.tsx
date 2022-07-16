import { FC } from "react";
import { Image, Text, View } from "react-native";

import Button, { ButtonView } from "./../../components/button";

import styles from "./game-over.styles";

const GameOverImage = require("./../../assets/images/game-over-bg.png");

type GameOverScreenProps = {
  onRestartPress: () => void;
  moves: number;
  userNumber: number;
};
const GameOver: FC<GameOverScreenProps> = ({
  onRestartPress,
  moves,
  userNumber,
}) => {
  return (
    <View style={styles.game_over__container}>
      <View style={styles.game_over__title}>
        <Text style={styles.game_over__title_text}>Game Over!</Text>
      </View>

      <View style={styles.game_over__image}>
        <Image style={styles.game_over_image_picture} source={GameOverImage} />
      </View>

      <View>
        <Text style={styles.game_over__text}>
          Your phone needed{" "}
          <Text style={styles.game_over__text_highlight}>{moves}</Text> rounds
          to guess the{" "}
          <Text style={styles.game_over__text_highlight}>{userNumber}</Text>{" "}
          number.
        </Text>
      </View>

      <Button
        title="Start new game"
        view={ButtonView.primary}
        onPress={onRestartPress}
      />
    </View>
  );
};

export default GameOver;
