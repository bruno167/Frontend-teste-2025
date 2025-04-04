import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: auto;
  padding: 24px;

  background: ${({ theme }) => theme.colors.base.lightBg};
  transition: all 0.2s ease-in-out;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1440px) {
    margin: 0 50px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CoursesHeader = styled.h2`
  padding: 20px;
  font-size: 24px;
  width: 100%;
  margin: 10px auto;
  height: 28px;
  line-height: 115%;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: ${({ theme }) => theme.fontWeights.body};
  color: ${({ theme }) => theme.colors.text.charcoalGray};
  transition: transform 0.2s ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    height: 37px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 50px 10px 50px;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 353px;
  width: 100%;
  padding: 0;
  background: ${({ theme }) => theme.colors.base.white};
  transition: transform 0.2s ease-in-out;

  @media screen and (min-width: 768px) {
    min-width: 245px;
  }

  @media screen and (min-width: 1024px) {
    min-width: 245px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 315px;
  }
`;

export const CardImage = styled.div.withConfig({ 
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !["thumbnail"].includes(prop)
})<{ thumbnail: string }>`
  background-image: url(${(props) => props.thumbnail});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 157px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between; 
  padding: 15px;
  gap: 15px;
  width: 100%;
  height: 195px;
  margin: 0 auto;
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  gap: 12px;
  width: 100%;
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  line-height: 116%;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  color: ${({ theme }) => theme.colors.text.slateGray};
  margin: 0; 
  text-align: left; 
`;


export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 140%;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: ${({ theme }) => theme.fontWeights.body};
  color: ${({ theme }) => theme.colors.text.slateGray};
  margin: 0; 
  text-align: left; 
`;

export const CardFavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 8px;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  top: 16px;
  left: 273px;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

export const CardFavorite = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 5px;
    gap: 16px;
    isolation: isolate;
    width: 100%;
    height: 100%;
`;

export const CardTag = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 12px;
    gap: 12px;
    height: 22px;
    background: ${({ theme }) => theme.colors.status.label};

`;

export const CardHighlight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px;
    gap: 8px;
    width: 22px;
    height: 22px;
    background: ${({ theme }) => theme.colors.status.highlight};
`;

export const CardTagText = styled.div`
  font-size: 12px;
  line-height: 115%;
  font-family: ${({ theme }) => theme.fonts.quattrocento};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.light};
  text-align: center;
  text-transform: uppercase;
`;

export const CardTagContainer = styled.div`
  display: flex;
  align-items: center;
  align-items: flex-start;
  margin: 10px;
  gap: 8px;
  width: 90%;
  height: 22px;
`;