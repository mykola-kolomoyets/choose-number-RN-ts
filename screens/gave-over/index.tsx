import { FC } from "react";
import { Text, View } from "react-native";

type GameOverScreenProps = {
  onRestartPress: () => void;
};
const GameOver: FC<GameOverScreenProps> = ({ onRestartPress }) => {
  return (
    <View>
      <Text>Game over!!!</Text>
    </View>
  );
};

export default GameOver;
