import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TypingText({
  text,
  type = "cover",
}: {
  text: string;
  type: "cover" | "title" | "text";
}) {
  const [visibleIndex, setVisibleIndex] = useState<number>(-1);
  const [blinkingColor, setBlinkingColor] = useState("transparent");

  const typingTimer = useRef<NodeJS.Timeout | -1>(-1);
  function typingAnimation() {
    clearTimeout(typingTimer.current);
    typingTimer.current = -1;

    if (visibleIndex < text.length) {
      setVisibleIndex((prev) => (prev += 1));

      typingTimer.current = setTimeout(() => {
        typingAnimation();
      }, 40);
    }
  }

  useEffect(() => {
    typingAnimation();

    return () => {
      clearTimeout(typingTimer.current);
    };
  }, []);

  return (
    <View>
      <Text
        style={[
          styles.generic,
          type === "cover" && styles.cover,
          type === "title" && styles.title,
        ]}
      >
        {[...text].map((char, index) => (
          <Text
            key={index}
            style={[
              styles.letter,
              { color: index <= visibleIndex ? "#fff" : "transparent" },
            ]}
          >
            {char}
          </Text>
        ))}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  generic: {
    color: "#fff",
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: "JosefinSans_400Regular",
  },
  cover: {
    fontSize: 52,
    letterSpacing: -2,
    lineHeight: 52,
    fontFamily: "JosefinSans_700Bold",
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    marginBottom: 16,
  },
  letter: {
    textTransform: "none",
  },
});
