import Image from "next/image";
import {
  ErrorButton,
  ErrorDescription,
  ErrorStyle,
  ErrorText,
} from "./error.style";
import {
  PrimaryButton,
  SecondaryButton,
  TerdiaryButton,
} from "../Button/button.styles";
import Button from "../Button/button";

export default function Error() {
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
      <ErrorButton>Voltar para o início</ErrorButton>
    </ErrorStyle>
  );
}
