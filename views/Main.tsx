import { GreatVibes_400Regular } from "@expo-google-fonts/great-vibes";
import {
  JosefinSans_400Regular,
  JosefinSans_700Bold,
  useFonts,
} from "@expo-google-fonts/josefin-sans";
import { useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { Colors } from "../commons/theme";
import { shuffleNumbers } from "../commons/utils";
import { AppContext } from "../context/AppContext";
import { Cover } from "./Cover";
import { EndGame } from "./EndGame";
import { Instructions } from "./Instructions";
import { Introduction } from "./Introduction";
import { LanguagePicker } from "./LanguagePicker";
import { Question } from "./Question";

type StepType =
  | "cover"
  | "language"
  | "introduction"
  | "instructions"
  | "question"
  | "end-game";

export const Main = () => {
  const [step, setStep] = useState<StepType>("language");
  const [debouncedStep, setDebouncedStep] = useState<StepType>("language");
  const [index, setIndex] = useState(0);
  const [debouncedIndex, setDebouncedIndex] = useState(0);
  const [order, setOrder] = useState<"set" | "random" | undefined>("set");
  const [questionsOrder, setQuestionsOrder] = useState<number[]>();

  const { lang, onChangeLang, exiting, onChangeExiting } =
    useContext(AppContext);

  const appOpacity = useSharedValue(0);

  let [fontsLoaded, fontError] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
    GreatVibes_400Regular,
  });

  function onNextQuestion() {
    if (index < 35) {
      setIndex((prev) => (prev += 1));
    } else {
      setStep("end-game");
    }
  }

  function onPrevQuestion() {
    if (index === 0) {
      setStep("language");
      setOrder(undefined);
      return;
    }
    setIndex((prev) => (prev -= 1));
  }

  function startOver() {
    setIndex(0);
    setStep("cover");
    setOrder(undefined);
    setQuestionsOrder(undefined);
  }

  useEffect(() => {
    if (!order) return;
    if (order === "set") {
      setQuestionsOrder(Array.from({ length: 36 }, (_, index) => index));
    } else {
      setQuestionsOrder(shuffleNumbers());
    }
  }, [order]);

  useEffect(() => {
    onChangeExiting(true);
    appOpacity.value = withTiming(0, { duration: 1500 });
  }, [step, index]);

  useEffect(() => {
    setTimeout(() => {
      setDebouncedStep(step);
    }, 1500);
  }, [step]);

  useEffect(() => {
    setTimeout(() => {
      onChangeExiting(false);
    }, 1200);
    setTimeout(() => {
      setDebouncedIndex(index);
    }, 1800);
  }, [index]);

  useEffect(() => {
    onChangeExiting(false);
    appOpacity.value = withTiming(1, { duration: 1500 });
  }, [debouncedStep, debouncedIndex]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.content, { opacity: appOpacity }]}>
        {debouncedStep === "cover" && (
          <Cover
            onNext={() => {
              setStep("language");
            }}
          />
        )}
        {debouncedStep === "language" && (
          <LanguagePicker onNext={() => setStep("introduction")} />
        )}
        {debouncedStep === "introduction" && (
          <Introduction onNext={() => setStep("instructions")} />
        )}
        {debouncedStep === "instructions" && (
          <Instructions
            onNext={(order: "set" | "random") => {
              setStep("question");
              setOrder(order);
            }}
          />
        )}
        {debouncedStep === "question" && (
          <Question
            questionIndex={questionsOrder && questionsOrder[debouncedIndex]}
            questionNumber={debouncedIndex + 1}
            onNext={onNextQuestion}
            onPrev={onPrevQuestion}
          />
        )}
        {debouncedStep === "end-game" && <EndGame startOver={startOver} />}
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingBottom: 64,
  },
});
