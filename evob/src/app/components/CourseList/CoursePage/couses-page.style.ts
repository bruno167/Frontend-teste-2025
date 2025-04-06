import { styled } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const StyledCoursePage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const CoursesBanner = styled.div.withConfig({
    shouldForwardProp: (prop) =>
      isPropValid(prop) && !["$srcdesktop", "$srcmobile"].includes(prop),
  })<{ $srcdesktop: string; $srcmobile: string }>`
    background-image: ${(props) => `url(${props.$srcmobile})`};
    background-size: cover;
    background-position: bottom;
    width: 100%;
    height: 140px;
    transition: 0.3s ease-in-out;
  
    @media (min-width: 768px) {
      background-image: ${(props) => `url(${props.$srcdesktop})`};
      height: 540px;
      background-position: center;    
    }
  `;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        
    }
  `;

export const DetailsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    gap: 16px;
    width: 100%;
    height: 55dvh;

    @media (min-width: 768px) {
        height: 346px;
        padding: 48px 60px;
        flex-direction: column;
        align-items: flex-start;
        padding: 48px 60px;
        gap: 20px;
    }

    `;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
    padding: 24px 24px 0 24px;

    @media (min-width: 768px) {
        width: 100%;
        padding: 0;
        align-items: flex-end;
    } 
`;

export const PageFavoriteButton = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 31px;
    gap: 6px;
    font-size: 12px;
    background-color: ${({ theme }) => theme.colors.base.white};
    color: ${({ theme }) => theme.colors.text.lightGray};
    font-family: ${({ theme }) => theme.fonts.inter};
    border-radius: 2px;
    border: solid 1px #D4D9EB;
    font-weight: ${({ theme }) => theme.fontWeights.heading};
    line-height: 125%; 
    cursor: pointer;

    &:hover {
      border-color: ${({ theme }) => theme.colors.button.primary};
      color: ${({ theme }) => theme.colors.button.primary};
      svg {
        fill: ${({ theme }) => theme.colors.button.primary};
        transition: 0.3s ease-in-out;
      }
      transition: 0.3s ease-in-out;
    }

    @media (min-width: 768px) {
        width: 114px;
        
    }
  `;

  export const DetailsTitle = styled.h1`
    font-family: ${({ theme }) => theme.fonts.inter};
    font-size: 24px;
    font-weight: 600;
    line-height: 115%;
    color: ${({ theme }) => theme.colors.text.charcoalGray};

    @media (min-width: 768px) {
        font-size: 32px;
    }
  `;

  export const DetailsDescription = styled.p`
    font-family: ${({ theme }) => theme.fonts.inter};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeights.body};
    line-height: 115%;
    color: ${({ theme }) => theme.colors.text.lightGray};

    @media (min-width: 768px) {
        font-size: 20px;
    }
  `;



  
