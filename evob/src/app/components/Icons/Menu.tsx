export default function Menu({
  width = 20,
  height = 20,
}: {
  color?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="18.0952"
        width="16.2609"
        height="1.90476"
        rx="0.952381"
        fill="currentColor"
      />
      <rect
        y="8.57141"
        width="22"
        height="1.90476"
        rx="0.952381"
        fill="currentColor"
      />
      <rect
        width="19.1304"
        height="1.90476"
        rx="0.952381"
        fill="currentColor"
      />
    </svg>
  );
}
