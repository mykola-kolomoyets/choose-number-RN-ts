import { FC, useEffect, useState } from "react";
import { View, Text, SafeAreaView, Alert, FlatList } from "react-native";
import CustomButton, { ButtonView } from "../../components/button";

import { generateNumber } from "./game.utils";

import styles from "./game.styles";

enum Decision {
  higher = "higher",
  lower = "lower",
}

type Round = {
  number: number;
  decision: Decision;
};

type GameScreenProps = {
  numberToGuess: number;
  onGameOver: () => void;
  onMoveMake: () => void;
};
const Game: FC<GameScreenProps> = ({
  numberToGuess,
  onGameOver,
  onMoveMake,
}) => {
  const [range, setRange] = useState<{ min: number; max: number }>({
    min: 1,
    max: 100,
  });

  const [currentNumber, setCurrentNumber] = useState(0);

  const [isGameOver, setIsGameOver] = useState(false);

  const [rounds, setRounds] = useState<Round[]>([]);

  const onHigherPress = () => {
    if (numberToGuess > currentNumber)
      return Alert.alert("Don`t lie!", `${currentNumber} is lower than number`);

    setRange((prev) => ({ ...prev, max: currentNumber }));

    setRounds((prev) =>
      prev.concat({ number: currentNumber, decision: Decision.higher })
    );

    onMoveMake();
  };

  const onLowerPress = () => {
    if (numberToGuess < currentNumber)
      return Alert.alert(
        "Don`t lie!",
        `${currentNumber} is greater than number`
      );

    setRange((prev) => ({ ...prev, min: currentNumber }));

    setRounds((prev) =>
      prev.concat({ number: currentNumber, decision: Decision.lower })
    );

    onMoveMake();
  };

  useEffect(() => {
    if (currentNumber === numberToGuess) Alert.alert("YOU WIN");
  }, [currentNumber]);

  useEffect(() => {
    setCurrentNumber(generateNumber(range.min, range.max, numberToGuess));

    console.log("aaaa", numberToGuess - range.min, range.max - numberToGuess);

    setIsGameOver(
      numberToGuess - range.min === 1 && range.max - numberToGuess === 1
    );
  }, [range]);

  useEffect(() => {
    console.log(range, currentNumber, numberToGuess);
    console.log("===");
  }, [currentNumber]);

  useEffect(() => {
    if (isGameOver && onGameOver) onGameOver();
  }, [isGameOver]);

  return (
    <SafeAreaView style={styles.game}>
      <Text style={styles.game__title}>Opponent`s Guess</Text>

      <View>
        <View style={styles.game__number}>
          <Text style={styles.game__number_text}>{currentNumber}</Text>
        </View>

        <Text style={styles.game__hint_text}>
          Is this number higher or lower ?
        </Text>

        <View style={styles.game__buttons}>
          <View style={styles.game__buttons_item}>
            <CustomButton
              view={ButtonView.primary}
              title="Higher"
              onPress={onHigherPress}
            />
          </View>

          <View style={styles.game__buttons_item}>
            <CustomButton
              view={ButtonView.primary}
              title="Lower"
              onPress={onLowerPress}
            />
          </View>
        </View>
      </View>

      <View style={styles.game__moves}>
        <Text>ROUNDS LOG</Text>

        <View>
          <FlatList
            data={rounds}
            renderItem={(round) => (
              <Text style={styles.game__move_item}>
                {round.item.number}
                {" -> "}
                {round.item.decision}
              </Text>
            )}
            keyExtractor={(round, index) =>
              round.number.toString() + round.decision + index
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Game;
