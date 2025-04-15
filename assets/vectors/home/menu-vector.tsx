import Svg, { Path } from "react-native-svg";

const MenuVector = () => {
  return (
    <Svg width="18" height="19" viewBox="0 0 18 19" fill="none">
      <Path
        d="M1 14H9"
        stroke="#111719"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M1 8H13"
        stroke="#111719"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path d="M1 1H6" stroke="#111719" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
};

export default MenuVector;
