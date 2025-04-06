import { styled } from "styled-components";

export const StyledShare = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: #02020273;
    `;

export const StyledModal = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 343px;
    height: 234px;
    top: 330px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 8px;
    z-index: 9999;
    transition: 0.5s ease-in-out;

    @media (min-width: 768px) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 405px;
    }
    `;

export const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: #F3F4F6 solid 1px;
    padding: 0px;
    width: 100%;
    height: 54px;
    `;
export const ModalHeaderContainer = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    `;

export const ModalHeaderButton = styled.button`
    width: 38px;
    height: 38px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #262626;

    &:hover {
        border-color: ${({ theme }) => theme.colors.button.primary};
        color: ${({ theme }) => theme.colors.button.primary};
        svg {
            fill: ${({ theme }) => theme.colors.button.primary};
            transition: 0.3s ease-in-out;
        }
        transition: 0.3s ease-in-out;
    }
    `;

export const ModalHeaderText = styled.p`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.inter};
    font-weight: ${({ theme }) => theme.fontWeights.heading};
    color: #262626;
    line-height: 125%;
`;

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 120px;
    padding: 16px;
    gap: 16px;
    `;

export const ModalInput = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 36px;
    border: #D4D9EB solid 1px;
    padding: 4px 12px;
    background-color: ${({ theme }) => theme.colors.base.white};    
    svg{
        color: #323334;
    }

    button {
        &:hover {
            svg {
                color: #2B932F;
                transition: 0.3s ease-in-out;
            }
        }
    }
    `;	

export const ShareUrl = styled.span`
    width: 100%;
    height: 16px;
    border: none;
    outline: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    color: #404040;
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.inter};
    font-weight: ${({ theme }) => theme.fontWeights.body};
    line-height: 125%;
    `;

export const ModalBodyButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    gap: 15px;
    width: 100%;
    height: 36px;
    background:#2B932F;
    border: none;
    color: ${({ theme }) => theme.colors.base.white};
    font-family: ${({ theme }) => theme.fonts.inter};
    font-weight: ${({ theme }) => theme.fontWeights.body};
    line-height: 125%;
    cursor: pointer;

    &:hover {
        background-color:#27c02c;
        transition: 0.3s ease-in-out;
    }
    `;
export const ModalFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    border-top: #E5E7EB solid 1px;
    padding: 16px;
    width: 100%;
    height: 54px;
    `;

export const ModalFooterButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 76px;
    height: 36px;
    gap: 6px;
    background-color: #fff;
    border: #E5E7EB solid 1px;
    font-family: ${({ theme }) => theme.fonts.inter};
    font-weight: ${({ theme }) => theme.fontWeights.heading};
    color: #404040;
    font-size: 12px;
    line-height: 125%;
    cursor: pointer;

    &:hover {
        border-color: ${({ theme }) => theme.colors.button.primary};
        color: ${({ theme }) => theme.colors.button.primary};
        transition: 0.3s ease-in-out;
    }
    `;