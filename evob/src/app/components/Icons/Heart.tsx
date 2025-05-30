export default function Heart({
  width = 20,
  height = 20,
  color = "#fff",
  fill = "none",
}: {
  color?: string;
  width?: number;
  height?: number;
  fill?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5165 17.3417C10.2332 17.4417 9.7665 17.4417 9.48317 17.3417C7.0665 16.5167 1.6665 13.075 1.6665 7.24166C1.6665 4.66666 3.7415 2.58333 6.29984 2.58333C7.8165 2.58333 9.15817 3.31666 9.99984 4.45C10.8415 3.31666 12.1915 2.58333 13.6998 2.58333C16.2582 2.58333 18.3332 4.66666 18.3332 7.24166C18.3332 13.075 12.9332 16.5167 10.5165 17.3417Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
