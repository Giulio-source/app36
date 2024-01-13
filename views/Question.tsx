import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { BaseButton } from "../components/BaseButton";
import { WhiteText } from "../components/WhiteText";
import { AppContext } from "../context/AppContext";
import { questions } from "../data/questionsData";

export const Question = ({
  questionIndex,
  questionNumber,
  onNext,
  onPrev,
}: {
  questionIndex: number | undefined;
  questionNumber: number;
  onNext: () => void;
  onPrev: () => void;
}) => {
  const { lang } = useContext(AppContext);

  //   if (!questionIndex) return;

  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <WhiteText tag="h1">{questions[questionIndex || 0][lang]}</WhiteText>
      </View>
      <View style={styles.wrapper}>
        <BaseButton icon="left" onPress={onPrev} flex1 />
        <BaseButton icon="right" onPress={onNext} flex1 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  question: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    marginTop: 32,
    gap: 32,
    flexDirection: "row",
    height: 68,
    width: "100%",
  },
});
