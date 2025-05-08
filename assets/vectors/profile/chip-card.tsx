import Svg, { Defs, Path, RadialGradient, Rect, Stop } from "react-native-svg";

const ChipCard = () => {
  return (
    <Svg width="33" height="24" viewBox="0 0 33 24" fill="none">
      <Rect
        y="1"
        width="33"
        height="22"
        rx="5"
        fill="url(#paint0_radial_1_338)"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 1.21892L12.8333 6.96825C12.8333 6.96825 14.3 11.9989 12.8333 16.3109L16.5 22.7789L20.1666 16.3109C20.1666 16.3109 18.7 12.7176 20.1666 6.96825C20.1666 6.96825 16.5 1.21892 16.5 1.21892Z"
        stroke="#C7C7B6"
        stroke-width="1.3"
        stroke-linejoin="bevel"
      />
      <Path
        d="M0 7.23239H12.8333"
        stroke="#C7C7B6"
        stroke-width="1.3"
        stroke-linejoin="bevel"
      />
      <Path
        d="M19.7996 7.23239H32.9996"
        stroke="#C7C7B6"
        stroke-width="1.3"
        stroke-linejoin="bevel"
      />
      <Path
        d="M0 16.032H12.8333"
        stroke="#C7C7B6"
        stroke-width="1.3"
        stroke-linejoin="bevel"
      />
      <Path
        d="M19.7996 16.032H32.9996"
        stroke="#C7C7B6"
        stroke-width="1.3"
        stroke-linejoin="bevel"
      />
      <Defs>
        <RadialGradient
          id="paint0_radial_1_338"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.9503 9.01386) rotate(141.302) scale(22.37 22.2003)"
        >
          <Stop stop-color="white" />
          <Stop offset="1" stop-color="#DDDCDA" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};

export default ChipCard;
