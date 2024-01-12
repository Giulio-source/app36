import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { BaseButton } from "../components/BaseButton";
import { WhiteText } from "../components/WhiteText";
import { AppContext } from "../context/AppContext";
import { languageData } from "../data/languageData";
import TypingText from "../components/TypingText";

export const Introduction = ({ onNext }: { onNext: () => void }) => {
  const { lang } = useContext(AppContext);

  function handleOnClick() {
    onNext();
  }

  return (
    <View style={styles.container}>
      <View>
        <TypingText type="title" text={languageData.introTitle[lang]} />
        <WhiteText>{languageData.intro1[lang]}</WhiteText>
        <WhiteText>{languageData.intro2[lang]}</WhiteText>
      </View>
      <BaseButton icon="right" onPress={handleOnClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
    width: "100%",
    justifyContent: "center",
  },
});
