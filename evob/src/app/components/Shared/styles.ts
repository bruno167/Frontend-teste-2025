import { styled } from "styled-components";

export const FloatingButton = styled.button`
    width: 56px;
    height: 56px;
    padding: 16px;
    gap: 10px;
    position: fixed;
    top: 50dvh;
    left: 80%;
    border-radius: 100%;
    border: none;
    background-color: ${({ theme }) => theme.colors.base.white};
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .10);
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .25);
        transform: scale(1.05);
        transition: 0.3s ease-in-out;
    }

    @media (min-width: 768px) {
        left: 90%;
        top: 80dvh;
    }

    @media (min-width: 1024px) {
        left: 90%;
        top: 80dvh;
    }
`;