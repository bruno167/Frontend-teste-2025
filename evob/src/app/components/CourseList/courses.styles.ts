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
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CoursesHeader = styled.h2`
  padding-left: 20px;
  font-size: 32px;
  line-height: 120%;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  color: ${({ theme }) => theme.colors.base.black};
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
    width: calc((100% - 10px) / 2);
    min-width: 245px;
  }

  @media screen and (min-width: 1024px) {
    width: calc((100% - 20px) / 3);
    min-width: 245px;
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 30px) / 4);
    min-width: 245px;
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
