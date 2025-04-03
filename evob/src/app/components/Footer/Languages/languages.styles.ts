import styled from "styled-components";

export const StyledLanguages = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 20px;
`;

export const StyledLanguageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;

  font-family: ${({ theme }) => theme.fonts.quattrocento};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 12px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.text.slateGray};
  position: relative;

  &.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%; /* Sublinhado sempre ativo */
    height: 2px;
    background-color: ${({ theme }) => theme.colors.base.purple};
    transition: width 0.3s ease-out;
  }

  &:hover::after {
    width: 100%; /* Sublinhado no hover */
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.base.purple};
    transition: width 0.3s ease-out;
  }
`;

