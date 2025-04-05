import Image from "next/image";
import {
  ErrorButton,
  ErrorDescription,
  ErrorStyle,
  ErrorText,
} from "./error.styles";
import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();

  return (
    <ErrorStyle>
      <Image
        src="/404.png"
        alt="Página não encontrada"
        width={350}
        height={350}
      />
      <ErrorText>Página não encontrada</ErrorText>
      <ErrorDescription>
        Parece que você entrou em uma dimensão desconhecida.
      </ErrorDescription>
      <ErrorButton onClick={() => router.push("/")}>
        Voltar para o início
      </ErrorButton>
    </ErrorStyle>
  );
}
