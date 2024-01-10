import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Cover } from "./views/Cover";

type StepType =
  | "cover"
  | "language"
  | "introduction"
  | "instructions"
  | "question"
  | "end-game";

export default function App() {
  const [step, setStep] = useState<StepType>("cover");

  return (
    <View style={styles.container}>
      {step === "cover" && <Cover onNext={() => setStep("language")} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
