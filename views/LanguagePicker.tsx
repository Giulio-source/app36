import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { BaseButton } from "../components/BaseButton";
import { AppContext, LanguageType } from "../context/AppContext";

export const LanguagePicker = ({ onNext }: { onNext: () => void }) => {
  const { onChangeLang } = useContext(AppContext);

  function handleOnClick(lang: LanguageType) {
    onChangeLang(lang);
    onNext();
  }

  return (
    <View style={styles.container}>
      <BaseButton
        label="English"
        onPress={() => handleOnClick("en")}
        upperCase
      />
      <BaseButton
        label="Italiano"
        onPress={() => handleOnClick("it")}
        upperCase
      />
      <BaseButton
        label="Español"
        onPress={() => handleOnClick("es")}
        upperCase
      />
      <BaseButton
        label="Français"
        onPress={() => handleOnClick("fr")}
        upperCase
      />
      <BaseButton
        label="Deutsch"
        onPress={() => handleOnClick("de")}
        upperCase
      />
      <BaseButton
        label="Português"
        onPress={() => handleOnClick("pt")}
        upperCase
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    width: "100%",
  },
});
