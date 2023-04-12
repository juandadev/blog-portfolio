import React from "react";

export default function ArrowRight({ size, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        className={className}
        d="M16.17 13l-3.58 3.59L14 18l6-6-6-6-1.41 1.41L16.17 11H4v2h12.17z"
      ></path>
    </svg>
  );
}
