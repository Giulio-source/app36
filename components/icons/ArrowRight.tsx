import { View } from "react-native";
import { Path, Svg } from "react-native-svg";

export const ArrowRight = () => {
  return (
    <View style={{ alignSelf: "center" }}>
      <Svg width={40} height={40} viewBox="0 0 475.4 153.83" fill="none">
        <Path
          d="M13.11,153.82H462.27c5.21,0,9.92-3.08,12.04-7.88,2.08-4.78,1.14-10.34-2.4-14.18L353.93,4.21c-4.95-5.34-13.27-5.62-18.55-.73-5.34,4.92-5.65,13.23-.73,18.55l97.6,105.52H13.12c-7.25,0-13.12,5.88-13.12,13.13s5.88,13.14,13.12,13.14h-.01Z"
          fill="#ffffff"
        />
      </Svg>
    </View>
  );
};
