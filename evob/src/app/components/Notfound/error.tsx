import Image from "next/image";
import { ErrorStyle } from "./error.style";

export default function Error() {
  return (
    <ErrorStyle>
      <Image
        src="/404.png"
        alt="Página não encontrada"
        width={300}
        height={300}
        className="w-1/2 h-auto mb-4"
      />
      <h1>Página não encontrada</h1>
      <p>A página que voc&ecirc; procurou não foi encontrada.</p>
    </ErrorStyle>
  );
}
