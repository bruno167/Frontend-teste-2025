import React from "react";
import {
  StyledHeaderDesktop,
  LoginContainer,
  IconContainer,
  SearchInput,
} from "./header-desktop.styles";
import Link from "next/link";
import Search from "../../Icons/Search";
import LogIn from "../../Icons/Log-in";
import User from "../../Icons/User";
import Logo from "../../Icons/Logo";
import { PrimaryButton, TerdiaryButton } from "../../Button/button.styles";

const HeaderDesktop = () => {
  return (
    <StyledHeaderDesktop>
      <IconContainer>
        <TerdiaryButton>
          <Search width={16} height={16} />
          <SearchInput placeholder="Busca" />
        </TerdiaryButton>
      </IconContainer>
      <Link href="/">
        <Logo width={76} height={30} />
      </Link>
      <LoginContainer>
        <TerdiaryButton>
          <User width={16} height={16} />
          Cadastre-se
        </TerdiaryButton>
        <PrimaryButton>
          <LogIn width={16} height={16} />
          Entrar
        </PrimaryButton>
      </LoginContainer>
    </StyledHeaderDesktop>
  );
};

export default HeaderDesktop;
