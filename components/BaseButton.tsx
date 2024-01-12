import { StyleSheet, Text, View } from "react-native";
import { ArrowLeft } from "./icons/ArrowLeft";
import { ArrowRight } from "./icons/ArrowRight";
import { JosefinSans_400Regular } from "@expo-google-fonts/josefin-sans";
export const BaseButton = ({
  icon,
  label,
}: {
  icon?: "left" | "right";
  label?: string;
}) => {
  return (
    <View style={styles.button}>
      {label && <Text style={styles.text}>{label}</Text>}
      {icon === "left" && <ArrowLeft />}
      {icon === "right" && <ArrowRight />}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: "#fff",
    borderWidth: 1,
    padding: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
    fontFamily: "JosefinSans_400Regular",
  },
});
