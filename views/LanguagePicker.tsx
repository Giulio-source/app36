import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { BaseButton } from "../components/BaseButton";
import {
  AppContext,
  LANGUAGE_HANDLER,
  LanguageType,
} from "../context/AppContext";

export const LanguagePicker = ({ onNext }: { onNext: () => void }) => {
  const { onChangeLang } = useContext(AppContext);

  function handleOnClick(lang: LanguageType) {
    onChangeLang(lang);
    onNext();
  }

  return (
    <View style={styles.container}>
      {Object.entries(LANGUAGE_HANDLER).map(([key, value], index, arr) => (
        <BaseButton
          key={key}
          label={value}
          onPress={() => handleOnClick(key as LanguageType)}
          upperCase
          // fadeDelay={(arr.length / (index + 1)) * 80}
          // fadeOffset={-50}
          // fadeDuration={1500}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    width: "100%",
  },
});
