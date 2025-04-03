import Facebook from "../../Icons/Facebook";
import Instagram from "../../Icons/Instagram";
import Whatsapp from "../../Icons/Whatsapp";
import Youtube from "../../Icons/Youtube";
import { StyledSocialLink, StyledSocials } from "./socials.styles";

export default function Socials() {
  return (
    <StyledSocials>
      <StyledSocialLink>
        <Whatsapp />
      </StyledSocialLink>
      <StyledSocialLink>
        <Youtube />
      </StyledSocialLink>
      <StyledSocialLink>
        <Facebook />
      </StyledSocialLink>
      <StyledSocialLink>
        <Instagram />
      </StyledSocialLink>
    </StyledSocials>
  );
}
