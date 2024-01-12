import { View } from "react-native";
import { Path, Svg } from "react-native-svg";
import { Colors } from "../../commons/theme";

export const ArrowLeft = () => {
  return (
    <View>
      <Svg width={40} height={40} viewBox="0 0 475.4 153.83" fill="none">
        <Path
          d="M462.29,0H13.13C7.92,0,3.21,3.08,1.09,7.88-.99,12.65-.04,18.22,3.49,22.05l117.98,127.56c2.59,2.8,6.12,4.22,9.64,4.22,3.2,0,6.39-1.16,8.91-3.48,5.34-4.92,5.65-13.23,.73-18.55L43.15,26.27H462.27c7.25,0,13.12-5.88,13.12-13.12,0-7.25-5.88-13.14-13.12-13.14h.01Z"
          fill={Colors.white}
        />
      </Svg>
    </View>
  );
};
