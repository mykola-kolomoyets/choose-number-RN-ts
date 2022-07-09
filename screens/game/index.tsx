import { View, Text, SafeAreaView } from "react-native";
import CustomButton, { ButtonView } from "../../components/button";

import styles from "./game.styles";

const Game = () => {
  return (
    <SafeAreaView style={styles.game}>
      <Text style={styles.game__title}>Opponent`s Guess</Text>

      <View>
        <Text>Higher or lower ?</Text>

        <View>
          <CustomButton view={ButtonView.primary} title="+" />
          <CustomButton view={ButtonView.primary} title="-" />
        </View>
      </View>

      <View>
        <Text>ROUNDS LOG</Text>
      </View>
    </SafeAreaView>
  );
};

export default Game;
