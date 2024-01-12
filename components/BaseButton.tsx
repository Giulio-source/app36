import { Pressable, StyleSheet, Text, View } from "react-native";
import { ArrowLeft } from "./icons/ArrowLeft";
import { ArrowRight } from "./icons/ArrowRight";
export const BaseButton = ({
  icon,
  label,
  onPress,
  upperCase,
}: {
  icon?: "left" | "right";
  label?: string;
  onPress?: () => void;
  upperCase?: boolean;
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.button, !icon && styles.noIcon]}>
        {label && (
          <Text style={[styles.text, upperCase && styles.uppercase]}>
            {label}
          </Text>
        )}
        {icon === "left" && <ArrowLeft />}
        {icon === "right" && <ArrowRight />}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: "#fff",
    borderWidth: 1,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "JosefinSans_400Regular",
  },
  uppercase: {
    textTransform: "uppercase",
  },
  noIcon: {
    padding: 16,
  },
});
