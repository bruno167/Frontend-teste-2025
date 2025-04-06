import { styled } from "styled-components";


export const StyledAlert = styled.div<{ type: string }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ type }) =>
    type === "success"
      ? "#2B932F"
      : type === "error"
      ? "#dc3545"
      : type === "info"
      ? "#ffc107"
      : "#007bff"};
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease, fadeOut 0.5s ease 3s;

  p {
    margin: 0;
    font-size: 16px;
    flex: 1;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;

@keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
`;
