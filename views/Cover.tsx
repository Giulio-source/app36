import { Pressable, StyleSheet, View } from "react-native";
import { BaseButton } from "../components/BaseButton";
import TypingText from "../components/TypingText";

export const Cover = ({ onNext }: { onNext: () => void }) => {
  return (
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
      <Pressable onPress={onNext}>
        <BaseButton icon="right" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    width: "100%",
    paddingHorizontal: 16,
    paddingBottom: 120,
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
});
