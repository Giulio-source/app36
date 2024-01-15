import { BaseButton } from "../components/BaseButton";
import { BaseLayout } from "../components/BaseLayout";
import TypingText from "../components/TypingText";
import { StyleSheet, Text, View } from "react-native";

export const Cover = ({ onNext }: { onNext: () => void }) => {
  return (
    <BaseLayout footer={<BaseButton icon="right" onPress={onNext} />}>
      <TypingText type="cover" text="36 Questions for Deeper Conversations." />
      <View style={styles.indexWrapper}>
        <Text style={styles.indexNumber}>36</Text>
      </View>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  indexWrapper: {
    position: "absolute",
    zIndex: -1,
    width: "150%",
  },
  indexNumber: {
    color: "#303030",
    fontSize: 400,
    fontFamily: "GreatVibes_400Regular",
    textAlign: "center",
  },
});
