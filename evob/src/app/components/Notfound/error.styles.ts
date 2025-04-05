import styled from "styled-components";

export const ErrorStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    height: 70dvh;
    background-color:${({ theme }) => theme.colors.base.lightBg};
    transition: 0.3s ease-in-out;

    @media (min-width: 768px) {
        height: 78vh;
    }

    @media (min-width: 1024px) {
        height: 78vh;

        img {
            width: 500px;
            height: 500px;
        }
    }
`;

export const ErrorText = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 10px auto;
    font-family: ${({ theme }) => theme.fonts.inter};
    color: ${({ theme }) => theme.colors.text.default};
    font-size: 30px;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    transition: 0.3s ease-in-out;

    @media (min-width: 768px) {
        font-size: 45px;
    }

    @media (min-width: 1024px) {
        font-size: 50px;
    }
`;

export const ErrorDescription = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.inter};
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: 15px;
    font-weight: ${({ theme }) => theme.fontWeights.body};
    transition: 0.3s ease-in-out;

    @media (min-width: 768px) {
        font-size: 20px;
    }
`;

export const ErrorButton = styled.button`
    display: flex;
    justify-content: center;
    align-self: stretch;
    padding: 12px 60px;
    margin: 20px auto;
    gap: 10px;
    width: 100%;
    height: 48px;
    font-weight: 500;
    font-size: 16px;
    line-height: 116%;
    background: ${({ theme }) => theme.colors.base.purple};
    font-family: ${({  theme }) => theme.fonts.robotoCondensed};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.text.light};
    border: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        background:${({ theme }) => theme.colors.button.hover};
        transition: 0.3s ease-in-out;
    }

    @media (min-width: 768px) {
        width: auto;
    }
`;