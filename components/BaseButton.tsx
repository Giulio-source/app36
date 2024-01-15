import { Pressable, StyleSheet, Text } from "react-native";
import { FadeInOut } from "./FadeInOut";
import { ArrowLeft } from "./icons/ArrowLeft";
import { ArrowRight } from "./icons/ArrowRight";
export const BaseButton = ({
  icon,
  label,
  onPress,
  upperCase,
  flex1,
}: {
  icon?: "left" | "right";
  label?: string;
  onPress?: () => void;
  upperCase?: boolean;
  flex1?: boolean;
}) => {
  return (
    <FadeInOut style={[flex1 && styles.flex1]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          flex1 && styles.flex1,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
      >
        {label && (
          <Text style={[styles.text, upperCase && styles.uppercase]}>
            {label}
          </Text>
        )}
        {icon === "left" && <ArrowLeft />}
        {icon === "right" && <ArrowRight />}
      </Pressable>
    </FadeInOut>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: "#fff",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    height: 68,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "JosefinSans_400Regular",
  },
  uppercase: {
    textTransform: "uppercase",
  },
  flex1: {
    flex: 1,
  },
  pressed: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});
