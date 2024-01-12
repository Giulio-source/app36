import {
  JosefinSans_400Regular,
  JosefinSans_700Bold,
  useFonts,
} from "@expo-google-fonts/josefin-sans";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AppContextProvider } from "./context/AppContext";
import { Cover } from "./views/Cover";
import { Instructions } from "./views/Instructions";
import { Introduction } from "./views/Introduction";
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
    <AppContextProvider>
      <View style={styles.container}>
        {step === "cover" && <Cover onNext={() => setStep("language")} />}
        {step === "language" && (
          <LanguagePicker onNext={() => setStep("introduction")} />
        )}
        {step === "introduction" && (
          <Introduction onNext={() => setStep("instructions")} />
        )}
        {step === "instructions" && <Instructions />}
      </View>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
});
