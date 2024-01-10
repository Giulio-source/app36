import {
  JosefinSans_400Regular,
  JosefinSans_700Bold,
  useFonts,
} from "@expo-google-fonts/josefin-sans";
import { SafeAreaView, StyleSheet, View } from "react-native";
import TypingText from "../components/TypingText";
import { ArrowRight } from "../components/icons/ArrowRight";

export const Cover = ({ onNext }: { onNext: () => void }) => {
  let [fontsLoaded, fontError] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  //   function handleOnClick() {
  //     gsap
  //       .timeline()
  //       .to("#cover", {
  //         autoAlpha: 0,
  //         duration: 2,
  //       })
  //       .to(
  //         "#cover button",
  //         {
  //           y: "random(-50, 50)",
  //           autoAlpha: 0,
  //           duration: 2,
  //           ease: "power4.out",
  //         },
  //         "<"
  //       )
  //       .to({}, { duration: 0.5 })
  //       .then(() => onNext());
  //   }

  //   useEffect(() => {
  //     gsap
  //       .timeline()
  //       .to("#cover", {
  //         autoAlpha: 1,
  //         duration: 2,
  //       })
  //       .fromTo(
  //         "#cover-title",
  //         { text: "", autoAlpha: 1 },
  //         {
  //           text: { value: "36 Questions for Deeper Conversations.", speed: 1 },
  //           ease: "none",
  //         },
  //         "-=1"
  //       );
  //   }, []);

  return (
    // <StyledInstructions id="cover">
    //   <section>
    //     <StyledTitle id="cover-title"></StyledTitle>
    //     <StyledQuestionNumber id="question-number">36</StyledQuestionNumber>
    //   </section>
    //   <button onClick={handleOnClick}>
    //     <ArrowRight />
    //   </button>
    // </StyledInstructions>
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <TypingText
          style={styles.title}
          text="36 Questions for Deeper Conversations."
          color="#fff"
          typingAnimationDuration={50}
        />
      </View>
      <View style={styles.button}>
        <ArrowRight />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    width: "100%",
    padding: 16,
  },
  title: {
    color: "#fff",
    textTransform: "capitalize",
    fontWeight: "700",
    fontSize: 48,
    letterSpacing: -2,
    lineHeight: 48,
    fontFamily: "JosefinSans_700Bold",
  },
  button: {
    borderColor: "#fff",
    borderWidth: 1,
    marginBottom: 120,
    padding: 8,
  },
});
