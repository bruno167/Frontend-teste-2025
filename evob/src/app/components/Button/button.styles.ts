import styled from "styled-components";

export const PrimaryButton = styled.button`
    background: ${({ theme }) => theme.colors.base.purple};
    font-family: 'Inter';
    font-weight: 500;
    cursor: pointer;
    padding: 8px 20px;
    border: none;
    color: white;
    gap: 8px;
    width: 111px;
    height: 35px;
    font-size: 16px;
    line-height: 17px;
    display: flex;


    &:hover {
        background:${({ theme }) => theme.colors.button.hover};
        transition: 0.3s ease-in-out;
    }
`;

export const SecondaryButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.base.purple};


    &:hover {
        color:${({ theme }) => theme.colors.button.hover};
        transition: 0.3s ease-in-out;
    }
`;

export const BannerButton = styled.button`
    position: absolute;
    left: 20px;
    top: 270px;
    width: 192px;
    height: 52px;
    border: none;

    background: ${({ theme }) => theme.colors.button.secondary};
    color: ${({ theme }) => theme.colors.text.light};

    font-family: ${({ theme }) => theme.fonts.robotoCondensed};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 16px;
    line-height: 116%;

    &:hover {
        background:${({ theme }) => theme.colors.button.hover};
        transition: 0.3s ease-in-out;
    }

    @media (min-width: 1024px) {
        left: 45px;
        top: 425px;
    }
`;

export const TerdiaryButton = styled.button`
    display: flex;
    align-items: center;
    padding-right: 20px;
    gap: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 15px;
    border: none;
    background: none;
    cursor: pointer;
    font-family: ${({  theme }) => theme.fonts.inter};
    font-weight: ${({ theme }) => theme.fontWeights.heading};
    svg path{
        fill: ${({ theme }) => theme.colors.base.purple};
    }

    &:hover {
        svg path {
            fill: ${({ theme }) => theme.colors.button.hover};
            transition: 0.3s ease-in-out;}
        }
`;

export const CardButton = styled.button`
    display: flex;
    justify-content: center;
    align-self: stretch;
    padding: 12px 60px;
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

    &:hover {
        background:${({ theme }) => theme.colors.button.hover};
        transition: 0.3s ease-in-out;
    }
`;