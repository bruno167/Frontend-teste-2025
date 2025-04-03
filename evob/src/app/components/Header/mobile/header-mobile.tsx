import React from "react";

import { StyledHeaderMobile, IconContainer } from "./header-mobile.styles";
import Link from "next/link";
import Menu from "../../Icons/Menu";
import Search from "../../Icons/Search";
import LogIn from "../../Icons/Log-in";
import Logo from "../../Icons/Logo";
import { SecondaryButton } from "../../Button/button.styles";

export const HeaderMobile = () => {
  return (
    <StyledHeaderMobile>
      <IconContainer>
        <SecondaryButton>
          <Menu />
        </SecondaryButton>
        <SecondaryButton>
          <Search />
        </SecondaryButton>
      </IconContainer>
      <Link href="/">
        <Logo />
      </Link>
      <SecondaryButton>
        <LogIn />
      </SecondaryButton>
    </StyledHeaderMobile>
  );
};

export default HeaderMobile;
