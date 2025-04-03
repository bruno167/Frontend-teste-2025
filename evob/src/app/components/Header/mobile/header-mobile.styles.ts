import styled from "styled-components";

export const StyledHeaderMobile = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 20px;
  height: 68px;
  background-color: ${({ theme }) => theme.colors.base.lightBg};
  backdrop-filter: blur(10px);
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 0px;
  gap: 20px;
  `;