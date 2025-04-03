import styled from "styled-components";

export const StyledFooterLinks = styled.div`
    display: flex;
    align-items: self-start;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;


export const StyledLink = styled.a`
  position: relative;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.slateGray};

  &::after {
    content: "";
    position: absolute;
    bottom: -2px; 
    left: 0;
    width: 0;
    height: 1px; 
    background-color: ${({ theme }) => theme.colors.base.purple};
    transition: width 0.3s ease-out; 
  }

  &:hover::after {
    width: 100%;
  }
`;




