import { StyleSheet, Text } from "react-native";

export const WhiteText = ({
  children,
  tag = "p",
}: {
  children: React.ReactNode;
  tag?: "h1" | "p";
}) => {
  return (
    <Text
      style={[styles.white, tag === "p" && styles.p, tag === "h1" && styles.h1]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  white: {
    color: "#dddddd",
    marginBottom: 16,
    fontFamily: "JosefinSans_400Regular",
  },
  p: {
    fontSize: 18,
    lineHeight: 20,
  },
  h1: {
    fontSize: 28,
  },
});
