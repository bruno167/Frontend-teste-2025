"use client";

import {
  LanguageContainer,
  StyledContainer,
  StyledFooter,
} from "./footer.styles";
import FooterLinks from "./FooterLinks/footer-links";
import Languages from "./Languages/languages";
import Socials from "./Socials/socials";

export default function Footer() {
  return (
    <StyledFooter>
      <Socials />
      <StyledContainer>
        <FooterLinks />
        <LanguageContainer>
          <Languages />
        </LanguageContainer>
      </StyledContainer>
    </StyledFooter>
  );
}
