import React from "react";
import Svg, { Circle } from "react-native-svg";

const LoadingSpinner = () => {
  return (
    <Svg width="100" height="100" viewBox="0 0 100 100">
      <Circle
        cx="50"
        cy="50"
        r="40"
        stroke="gray"
        strokeWidth="4"
        fill="none"
        strokeDasharray="251.2"
        strokeDashoffset="125.6"
        strokeLinecap="round"
        animation="spin 1.5s linear infinite"
      />
    </Svg>
  );
};

export default LoadingSpinner;
