import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const StyledBanner = styled.div`
  width: 100%;
  height: 460px;

  @media (max-width: 1024px) {
    height: 540px;
  }
`;


export const StyledBannerArea = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !["$srcdesktop", "$srcmobile"].includes(prop),
})<{ $srcdesktop: string; $srcmobile: string }>`
  background-image: ${(props) =>
    `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.35)), url(${props.$srcmobile})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 460px;
  position: relative;

  @media (min-width: 768px) {
    background-image: ${(props) =>
      `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.00) 70%, rgba(0, 0, 0, 0.9) 100%)
, url(${props.$srcdesktop})`};
    height: 540px;
    background-position: left;    
  }
`;

export const StyledBannerTitle = styled.h1`
  width: 335px;
  max-width: 90%;
  height: 144px;
  gap: 20px;
  position: absolute;
  left: 20px;
  top: 180px;
  font-size: 32px;

  line-height: 120%;
  font-family: ${({ theme}) => theme.fonts.inter};
  font-weight: ${({ theme}) => theme.fontWeights.bold};
  color:${({ theme}) => theme.colors.text.light};

  @media screen and (min-width: 1024px) {
        font-size: 52px;
        line-height: 116%;
        width: 419px;
        height: 168px;
        left: 47px;
        top: 160px;
    }
`;

export const HighlightArea = styled.div`
  
  @media screen and (min-width: 1024px) {    
    position: absolute;
    width: 658px;
    height: 540px;
    background: ${({ theme }) => theme.colors.base.purple};
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
  }

`;