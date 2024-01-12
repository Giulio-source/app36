import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TypingText({
  text,
  type = "cover",
}: {
  text: string;
  type: "cover" | "title" | "text";
}) {
  const [innerText, setInnerText] = useState("");
  const [blinkingColor, setBlinkingColor] = useState("transparent");

  const index = useRef(0);
  const typingTimer = useRef<any>(-1);
  const blinkingCursorTimer = useRef<any>(-1);
  function typingAnimation() {
    clearTimeout(typingTimer.current);

    typingTimer.current = -1;

    if (index.current < text.length) {
      setInnerText((prev) => prev + text.charAt(index.current));

      index.current++;

      typingTimer.current = setTimeout(() => {
        typingAnimation();
      }, 50);
    }
  }

  function blinkingCursorAnimation() {
    blinkingCursorTimer.current = setInterval(() => {
      if (blinkingColor == "transparent") {
        setBlinkingColor("white");
      } else {
        setBlinkingColor("transparent");
      }
    }, 190);
  }

  useEffect(() => {
    typingAnimation();
    blinkingCursorAnimation();

    return () => {
      clearTimeout(typingTimer.current);
      typingTimer.current = -1;
      clearInterval(blinkingCursorTimer.current);
      blinkingCursorTimer.current = -1;
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
        {innerText}
        {innerText !== text && (
          <Text
            style={{
              color: blinkingColor,
              fontWeight: "100",
            }}
          >
            |
          </Text>
        )}
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
    fontSize: 48,
    letterSpacing: -2,
    lineHeight: 48,
    fontFamily: "JosefinSans_700Bold",
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    marginBottom: 16,
  },
});
