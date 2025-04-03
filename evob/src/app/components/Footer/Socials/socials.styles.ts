import styled from "styled-components";

export const StyledSocials = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;

export const StyledSocialLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: ${({ theme }) => theme.colors.text.slateGray};
  background-color: transparent;
  cursor: pointer;

`;
