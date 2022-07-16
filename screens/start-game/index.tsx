import React, { FC, useState } from "react";
import { TextInput, View, Text, TextInputProps, Alert } from "react-native";

import CustomButton, { ButtonView } from "../../components/button";
import { colors } from "../../styles/colors";

import styles from "./start-game.styles";

const textInputProps: TextInputProps = {
  style: styles.number_input,
  textAlign: "center",
  autoFocus: true,
  placeholder: "Enter the number",
  placeholderTextColor: colors.white,
  keyboardType: "number-pad",
  maxLength: 2,
  autoCapitalize: "none",
  autoCorrect: false,
  autoComplete: "off",
};

type StartGameScreenProps = {
  onNumberSave: (value: number) => void;
};
const StartGame: FC<StartGameScreenProps> = ({ onNumberSave }) => {
  const [number, setNumber] = useState("");

  const onNumberChange = (value: string) => setNumber(value);

  const onCancelPress = () => {
    setNumber("");
  };

  const onConfirmPress = () => {
    const enteredNumber = Number(number);

    const isInvalidNumber =
      isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99;
    if (isInvalidNumber) {
      Alert.alert("Invalid number", "You have to enter 2-digit number", [
        { text: "Okay", style: "destructive", onPress: onCancelPress },
      ]);
    }

    onNumberSave(enteredNumber);
  };

  return (
    <View style={styles.root_container}>
      <View style={styles.start__game_title}>
        <Text style={styles.start__game_title_text}>Guess the number</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          {...textInputProps}
          value={number}
          onChangeText={onNumberChange}
        />

        <View style={styles.buttons}>
          <View style={styles.buttons_inner}>
            <CustomButton
              view={ButtonView.primary}
              title="Confirm"
              onPress={onConfirmPress}
            />
          </View>

          <View style={styles.buttons_inner}>
            <CustomButton
              view={ButtonView.secondary}
              title="Reset"
              onPress={onCancelPress}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default StartGame;
