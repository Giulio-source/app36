import { StyleSheet, Text } from "react-native";

export const WhiteText = ({ children }: { children: React.ReactNode }) => {
  return <Text style={styles.white}>{children}</Text>;
};

const styles = StyleSheet.create({
  white: {
    color: "#fff",
  },
});
