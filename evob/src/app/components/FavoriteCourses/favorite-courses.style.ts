import { styled } from "styled-components";

export const FavoriteSection = styled.section`
    display: flex;
    flex-direction: column;
    min-width: 375px;
    height: auto;
    gap: 40px; 

    @media screen and (min-width: 768px) {
        width: 100%;
        height: auto;
        gap: 40px;
    }
`;

export const FavoriteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.base.lightBg};
    border-radius: 8px;
    margin: 20px 0;
    width: 100%;
    height: 200px;
    text-align: center;
 `;

export const FavotiresIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;   
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.base.white};
    border: 1px solid ${({ theme }) => theme.colors.button.border};
    gap: 10px;
`;

export const FavoriteMessage = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 234px;
    height: 39px;
    margin-top: 10px;
    line-height: 115%;
    text-align: center;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text.muted};
    font-weight: ${({ theme }) => theme.fontWeights.body};
    font-family: ${({ theme }) => theme.fonts.inter};
`;      