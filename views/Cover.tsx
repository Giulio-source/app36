import { StyleSheet, View } from "react-native";
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
          type="cover"
          text="36 Questions for Deeper Conversations."
        />
      </View>
      <BaseButton icon="right" onPress={onNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    width: "100%",
  },
});
