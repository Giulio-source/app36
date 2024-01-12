import { StyleSheet, View } from "react-native";
import { BaseButton } from "../components/BaseButton";

export const LanguagePicker = ({ onNext }: { onNext: () => void }) => {
  return (
    <View style={styles.container}>
      <BaseButton label="English" />
      <BaseButton label="Italiano" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
    width: "100%",
    padding: 16,
    justifyContent: "center",
  },
});
