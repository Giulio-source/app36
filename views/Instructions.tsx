import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { BaseButton } from "../components/BaseButton";
import TypingText from "../components/TypingText";
import { WhiteText } from "../components/WhiteText";
import { AppContext } from "../context/AppContext";
import { languageData } from "../data/languageData";
import { BaseLayout } from "../components/BaseLayout";

export const Instructions = ({
  onNext,
}: {
  onNext: (order: "set" | "random") => void;
}) => {
  const { lang } = useContext(AppContext);

  return (
    <BaseLayout
      footer={
        <View style={styles.wrapper}>
          <BaseButton
            label={languageData.orderSet[lang]}
            onPress={() => onNext("set")}
          />
          <BaseButton
            label={languageData.orderRandom[lang]}
            onPress={() => onNext("random")}
          />
        </View>
      }
    >
      <TypingText type="title" text={languageData.instructionsTitle[lang]} />
      <WhiteText>{languageData.instructions1[lang]}</WhiteText>
      <WhiteText>{languageData.instructions2[lang]}</WhiteText>
      <WhiteText>{languageData.instructions3[lang]}</WhiteText>
      <WhiteText>{languageData.order[lang]}</WhiteText>
    </BaseLayout>
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
