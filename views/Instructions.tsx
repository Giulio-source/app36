import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { BaseButton } from "../components/BaseButton";
import TypingText from "../components/TypingText";
import { WhiteText } from "../components/WhiteText";
import { AppContext } from "../context/AppContext";
import { languageData } from "../data/languageData";

export const Instructions = () => {
  const { lang } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View>
        <TypingText type="title" text={languageData.instructionsTitle[lang]} />
        <WhiteText>{languageData.instructions1[lang]}</WhiteText>
        <WhiteText>{languageData.instructions2[lang]}</WhiteText>
        <WhiteText>{languageData.instructions3[lang]}</WhiteText>
        <WhiteText>{languageData.order[lang]}</WhiteText>
      </View>
      <View style={styles.wrapper}>
        <BaseButton label={languageData.orderSet[lang]} onPress={() => {}} />
        <BaseButton label={languageData.orderRandom[lang]} onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  wrapper: {
    marginTop: 32,
    display: "flex",
    gap: 32,
  },
});
