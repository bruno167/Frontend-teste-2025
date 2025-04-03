import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 40px 20px;
    gap: 40px;
    background-color: ${({ theme }) => theme.colors.base.lightBg};

    font-family: ${({ theme }) => theme.fonts.quattrocento};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 12px;
    line-height: 120%;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 60px;
    }

`;

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;

    @media screen and (min-width: 768px) {
        display: flex;
        width: auto;
        height: 22px;
        gap: 60px;
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 88px;
    gap: 20px;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        height: 22px;
        gap: 60px;
    }
`;

export const LanguageContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    padding: 0px;
    width: 124px;
    height: 16px;
`;