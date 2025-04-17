import Svg, { Path } from "react-native-svg";

const CloseVector = () => {
  return (
    <Svg width={20} height={20} viewBox="0 0 18 18" fill="none">
      <Path
        d="M5.09229 4.97766L13.4773 13.3627"
        stroke="#FF6B57"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M5.09375 13.3629L13.4787 4.97792"
        stroke="#FF6B57"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default CloseVector;
