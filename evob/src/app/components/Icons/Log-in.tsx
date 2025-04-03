export default function LogIn({
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
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20V17.7778H17.7778V2.22222H10V0H17.7778C18.3889 0 18.9122 0.217407 19.3478 0.652222C19.7826 1.08778 20 1.61111 20 2.22222V17.7778C20 18.3889 19.7826 18.9122 19.3478 19.3478C18.9122 19.7826 18.3889 20 17.7778 20H10ZM7.77778 15.5556L6.25 13.9444L9.08333 11.1111H0V8.88889H9.08333L6.25 6.05556L7.77778 4.44444L13.3333 10L7.77778 15.5556Z"
        fill="currentColor"
      />
    </svg>
  );
}
