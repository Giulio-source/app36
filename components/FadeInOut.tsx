import { useContext, useEffect } from "react";
import { StyleProp } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { random } from "../commons/utils";
import { AppContext } from "../context/AppContext";

export const FadeInOut = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style: StyleProp<any>;
}) => {
  const { exiting } = useContext(AppContext);

  const offsetY = useSharedValue(random(-50, 0));

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: offsetY.value }],
  }));

  useEffect(() => {
    offsetY.value = withDelay(
      random(0, 500),
      withTiming(0, { duration: 1500 })
    );
  }, []);

  useEffect(() => {
    if (exiting) {
      offsetY.value = withDelay(
        random(0, 500),
        withTiming(random(0, 50), { duration: 1500 })
      );
    }
  }, [exiting]);

  return (
    <Animated.View style={[style, animatedStyles]}>{children}</Animated.View>
  );
};
