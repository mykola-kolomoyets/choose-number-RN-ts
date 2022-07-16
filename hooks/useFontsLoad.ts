import * as Font from "expo-font";

const useFontsLoader = async () => {
  await Font.loadAsync({
    "open-sans-bold": require("./../assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-regular": require("./../assets/fonts/OpenSans-Regular.ttf"),
  });
};

export default useFontsLoader;
