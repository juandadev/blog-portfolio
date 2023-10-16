import s from "./Icons.module.scss";

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
        className={white ? s.elipse_white : s.elipse}
        cx="11"
        cy="11"
        r="9"
        strokeWidth={stroke}
      ></circle>
    </svg>
  );
}
