import React, { Fragment, useState } from "react";
import { Text, View, SafeAreaView, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./screens/start-game";
import Game from "./screens/game";

import styles from "./app.styles";
import { colors } from "./styles/colors";
import GameOver from "./screens/gave-over";

const startGameBg = require("./assets/images/start-game-bg.png");

export default function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [userNumber, setUserNumber] = useState<number | null>(null);

  const onNumberPick = (value: number) => setUserNumber(value);

  const onGameOver = () => setIsGameOver(true);

  const onGameRestart = () => {
    setUserNumber(null);
    setIsGameOver(false);
  };

  return (
    <LinearGradient
      colors={[colors.violet, colors.yellow]}
      style={styles.container}
    >
      <ImageBackground
        style={styles.container}
        source={startGameBg}
        imageStyle={styles.startGameImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.container}>
          {isGameOver ? (
            <GameOver onRestartPress={onGameRestart} />
          ) : Boolean(userNumber) ? (
            <Game numberToGuess={userNumber || 0} onGameOver={onGameOver} />
          ) : (
            <StartGame onNumberSave={onNumberPick} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
