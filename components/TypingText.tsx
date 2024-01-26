import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../commons/theme";

export default function TypingText({
  text,
  type = "cover",
  fast,
}: {
  text: string;
  type: "cover" | "title" | "text" | "question";
  fast?: boolean;
}) {
  const [visibleIndex, setVisibleIndex] = useState<number>(-1);

  const counter = useRef(-1);
  const typingTimer = useRef<NodeJS.Timeout | -1>(-1);

  function typingAnimation() {
    clearTimeout(typingTimer.current);
    typingTimer.current = -1;

    if (counter.current < text.length) {
      counter.current++;
      setVisibleIndex((prev) => (prev += 1));

      typingTimer.current = setTimeout(
        () => {
          typingAnimation();
        },
        fast ? 1000 / text.length : 35
      );
    }
  }

  useEffect(() => {
    counter.current = -1;
    setVisibleIndex(-1);
    typingAnimation();

    return () => {
      clearTimeout(typingTimer.current);
    };
  }, [text]);

  return (
    <View style={{ width: "100%" }}>
      <Text
        style={[
          styles.generic,
          type === "cover" && styles.cover,
          type === "title" && styles.title,
          type === "question" && styles.question,
        ]}
      >
        {[...text].map((char, index) => (
          <Text
            key={index}
            style={[
              styles.letter,
              { color: index <= visibleIndex ? Colors.white : "transparent" },
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
    color: Colors.white,
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: "JosefinSans_400Regular",
    textAlign: "center",
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
  question: {
    fontSize: 28,
    lineHeight: 36,
  },
});
