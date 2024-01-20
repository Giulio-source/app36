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
  fadeDelay,
  fadeDuration,
  fadeOffset,
}: {
  children: React.ReactNode;
  style: StyleProp<any>;
  fadeDelay?: number;
  fadeDuration?: number;
  fadeOffset?: number;
}) => {
  const { exiting } = useContext(AppContext);

  const offsetY = useSharedValue(fadeOffset || random(-50, 0));

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: offsetY.value }],
  }));

  useEffect(() => {
    if (exiting) {
      offsetY.value = withDelay(
        random(0, 400),
        withTiming(random(20, 50), { duration: 1500 })
      );
    } else {
      offsetY.value = withTiming(0, { duration: fadeDuration || 2500 });
    }
  }, [exiting]);

  return (
    <Animated.View style={[style, animatedStyles]}>{children}</Animated.View>
  );
};
