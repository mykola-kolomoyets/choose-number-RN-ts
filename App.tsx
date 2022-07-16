import React, { Fragment, useState } from "react";
import { Text, View, SafeAreaView, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import StartGame from "./screens/start-game";
import Game from "./screens/game";

import styles from "./app.styles";
import { colors } from "./styles/colors";
import GameOver from "./screens/gave-over";
import useFontsLoader from "./hooks/useFontsLoad";

const startGameBg = require("./assets/images/start-game-bg.png");

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [isGameOver, setIsGameOver] = useState(false);

  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);

  const loadFonts = async () => useFontsLoader();

  const onNumberPick = (value: number) => setUserNumber(value);

  const onGameOver = () => setIsGameOver(true);

  const onGameRestart = () => {
    setUserNumber(null);
    setIsGameOver(false);
    setMoves(0);
  };

  const onMoveMake = () => setMoves((prev) => prev + 1);

  if (!isLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsLoaded(true)}
        onError={() => {}}
      />
    );
  }

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
            <GameOver
              onRestartPress={onGameRestart}
              userNumber={userNumber!}
              moves={moves}
            />
          ) : Boolean(userNumber) ? (
            <Game
              numberToGuess={userNumber || 0}
              onMoveMake={onMoveMake}
              onGameOver={onGameOver}
            />
          ) : (
            <StartGame onNumberSave={onNumberPick} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
