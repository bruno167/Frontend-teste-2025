import styled from "styled-components";

export const ErrorStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 770px;
    background-color:${({ theme }) => theme.colors.base.lightBg};
    text-align: center;
    font-family: Arial, sans-serif;
    color: #333;
`;