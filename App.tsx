import React, { useState } from "react";
import { SafeAreaView, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./screens/start-game";
import Game from "./screens/game";

import styles from "./app.styles";
import { colors } from "./styles/colors";

const startGameBg = require("./assets/images/start-game-bg.png");

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);

  const onNumberPick = (value: number) => {
    setUserNumber(value);
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
          {Boolean(userNumber) ? (
            <Game />
          ) : (
            <StartGame onNumberSave={onNumberPick} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
