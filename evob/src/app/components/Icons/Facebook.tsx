export default function Facebook({
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0C3.58882 0 0 3.58882 0 8C0 12.4109 3.58882 16 8 16C12.4109 16 16 12.4109 16 8C16 3.58882 12.4115 0 8 0ZM9.98953 8.28164H8.68799V12.9206H6.75937C6.75937 12.9206 6.75937 10.3859 6.75937 8.28164H5.84259V6.64207H6.75937V5.58157C6.75937 4.82204 7.12028 3.63522 8.70571 3.63522L10.1349 3.6407V5.23226C10.1349 5.23226 9.26642 5.23226 9.09756 5.23226C8.92871 5.23226 8.68863 5.31668 8.68863 5.67889V6.64239H10.1581L9.98953 8.28164Z"
        fill="currentColor"
      />
    </svg>
  );
}
