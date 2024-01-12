import {
  JosefinSans_400Regular,
  JosefinSans_700Bold,
  useFonts,
} from "@expo-google-fonts/josefin-sans";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Cover } from "./views/Cover";
import { LanguagePicker } from "./views/LanguagePicker";

type StepType =
  | "cover"
  | "language"
  | "introduction"
  | "instructions"
  | "question"
  | "end-game";

export default function App() {
  const [step, setStep] = useState<StepType>("cover");
  let [fontsLoaded, fontError] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      {step === "cover" && <Cover onNext={() => setStep("language")} />}
      {step === "language" && (
        <LanguagePicker onNext={() => setStep("introduction")} />
      )}
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
