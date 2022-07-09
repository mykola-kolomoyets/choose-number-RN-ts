import { FC } from "react";
import {
  ButtonProps,
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native";

import styles from "./button.styles";

export enum ButtonView {
  primary = "primary",
  secondary = "secondary",
}

type CustomButtonProps = {
  view: ButtonView;
} & ButtonProps;

const CustomButton: FC<CustomButtonProps> = ({ view, title, onPress }) => {
  const pressableClasses = ({ pressed }: PressableStateCallbackType) =>
    [
      styles.button,
      styles[`button__${view}`],
      pressed ? styles[`button__${view}_pressed`] : "",
    ] as StyleProp<ViewStyle>;

  const buttonTextClasses = [
    styles.button__text,
    styles[`button__${view}_text`],
  ];

  return (
    <View style={styles.button_container}>
      <Pressable
        style={pressableClasses}
        android_ripple={styles.button_ripple}
        onPress={onPress}
      >
        <Text style={buttonTextClasses}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;
