export default function DocumentCopy({
  width = 16,
  height = 16,
}: {
  color?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3334 8.93332V10.9333C11.3334 13.6 10.2667 14.6667 7.60004 14.6667H5.06671C2.40004 14.6667 1.33337 13.6 1.33337 10.9333V8.39999C1.33337 5.73332 2.40004 4.66666 5.06671 4.66666H7.06671"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3333 8.93332H9.19998C7.59998 8.93332 7.06665 8.39999 7.06665 6.79999V4.66666L11.3333 8.93332Z"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.73328 1.33334H10.3999"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66663 3.33334C4.66663 2.22668 5.55996 1.33334 6.66663 1.33334H8.41329"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 5.33334V9.46001C14.6667 10.4933 13.8267 11.3333 12.7933 11.3333"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6666 5.33334H12.6666C11.1666 5.33334 10.6666 4.83334 10.6666 3.33334V1.33334L14.6666 5.33334Z"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
