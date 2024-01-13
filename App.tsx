import {
  JosefinSans_400Regular,
  JosefinSans_700Bold,
  useFonts,
} from "@expo-google-fonts/josefin-sans";
import { useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { Colors } from "./commons/theme";
import { shuffleNumbers } from "./commons/utils";
import { AppContext, AppContextProvider } from "./context/AppContext";
import { questions } from "./data/questionsData";
import { Cover } from "./views/Cover";
import { EndGame } from "./views/EndGame";
import { Instructions } from "./views/Instructions";
import { Introduction } from "./views/Introduction";
import { LanguagePicker } from "./views/LanguagePicker";
import { Question } from "./views/Question";
import { Main } from "./views/Main";

export default function App() {
 

  return (
    <AppContextProvider>
      <Main />
    </AppContextProvider>
  );
}

