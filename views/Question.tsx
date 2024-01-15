import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { BaseButton } from "../components/BaseButton";
import TypingText from "../components/TypingText";
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

  return (
    <Animated.View style={styles.container}>
      <View style={styles.question}>
        <TypingText
          type="question"
          text={questions[questionIndex || 0][lang]}
          fast
        />
        <View style={styles.indexWrapper}>
          <Text style={styles.indexNumber}>{questionNumber}</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <BaseButton icon="left" onPress={onPrev} flex1 />
        <BaseButton icon="right" onPress={onNext} flex1 />
      </View>
    </Animated.View>
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
    gap: 16,
    flexDirection: "row",
    height: 68,
    width: "100%",
  },
  indexWrapper: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
  },
  indexNumber: {
    color: "#303030",
    fontSize: 300,
    fontFamily: "GreatVibes_400Regular",
    textAlign: "center",
  },
});
