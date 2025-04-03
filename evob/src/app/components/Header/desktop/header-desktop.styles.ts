import styled from "styled-components";

export const StyledHeaderDesktop = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 60px;
  height: 68px;
  background-color: ${({ theme }) => theme.colors.base.lightBg};
  backdrop-filter: blur(10px);
`;

export const SearchInput = styled.input`
    width: auto;
    outline: none;
    border: none;
    background: none;
    font-size: 16px;

    
    font-family: ${({  theme }) => theme.fonts.inter};
    font-weight: ${({ theme }) => theme.fontWeights.heading};

    &::placeholder {
    background-color: none;

    color: ${({ theme }) => theme.colors.base.black};
    font-family: ${({  theme }) => theme.fonts.inter};
    font-weight: ${({ theme }) => theme.fontWeights.heading};
    }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LoginContainer = styled.div`
  display: flex;

`;