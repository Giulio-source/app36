import {
  JosefinSans_400Regular,
  JosefinSans_700Bold,
  useFonts,
} from "@expo-google-fonts/josefin-sans";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { shuffleNumbers } from "./commons/utils";
import { AppContext, AppContextProvider } from "./context/AppContext";
import { questions } from "./data/questionsData";
import { Cover } from "./views/Cover";
import { Instructions } from "./views/Instructions";
import { Introduction } from "./views/Introduction";
import { LanguagePicker } from "./views/LanguagePicker";
import { Question } from "./views/Question";
import { WhiteText } from "./components/WhiteText";
import { EndGame } from "./views/EndGame";
import { Colors } from "./commons/theme";

type StepType =
  | "cover"
  | "language"
  | "introduction"
  | "instructions"
  | "question"
  | "end-game";

export default function App() {
  const [step, setStep] = useState<StepType>("cover");
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [order, setOrder] = useState<"set" | "random" | undefined>("set");
  const [questionsOrder, setQuestionsOrder] = useState<number[]>();

  const { lang, onChangeLang } = useContext(AppContext);

  let [fontsLoaded, fontError] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  function onNextQuestion() {
    console.log("on next", index);
    setIndex((prev) => (prev += 1));
  }

  function onPrevQuestion() {
    console.log("on prev");

    if (index === 0) {
      setStep("language");
      setOrder(undefined);
      setQuestionsOrder(undefined);
      onChangeLang("en");
      return;
    }
    setIndex((prev) => (prev -= 1));
  }

  function startOver() {
    setIndex(0);
    setStep("cover");
    setOrder(undefined);
    setQuestionsOrder(undefined);
    onChangeLang("en");
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
    if (index !== undefined && lang && step === "question" && questionsOrder) {
      if (index >= 36) {
        setStep("end-game");
      } else {
        const nextMessage = questions[questionsOrder[index]][lang];
        setMessage(nextMessage);
      }
    }
  }, [index, lang, step, questionsOrder]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AppContextProvider>
      <View style={styles.container}>
        {step === "cover" && <Cover onNext={() => setStep("language")} />}
        {step === "language" && (
          <LanguagePicker onNext={() => setStep("introduction")} />
        )}
        {step === "introduction" && (
          <Introduction onNext={() => setStep("instructions")} />
        )}
        {step === "instructions" && (
          <Instructions
            onNext={(order: "set" | "random") => {
              setStep("question");
              setOrder(order);
            }}
          />
        )}
        {step === "question" && (
          <Question
            questionIndex={questionsOrder && questionsOrder[index]}
            questionNumber={index + 1}
            onNext={onNextQuestion}
            onPrev={onPrevQuestion}
          />
        )}
        {step === "end-game" && <EndGame startOver={startOver} />}
      </View>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
});
