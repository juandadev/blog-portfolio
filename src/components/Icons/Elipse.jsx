import React from "react";

export default function Elipse({ size, stroke, white = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox={`0 0 22 22`}
    >
      <circle
        cx="11"
        cy="11"
        r="9"
        stroke={`${white ? "#FFFFFF" : "#A80038"}`}
        strokeWidth={stroke}
      ></circle>
    </svg>
  );
}
