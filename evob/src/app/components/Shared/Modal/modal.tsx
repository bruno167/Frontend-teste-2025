"use client";

import {
  ModalBody,
  ModalBodyButton,
  ModalFooter,
  ModalFooterButton,
  ModalHeader,
  ModalHeaderButton,
  ModalHeaderContainer,
  ModalHeaderText,
  ModalInput,
  ShareUrl,
  StyledModal,
  StyledShare,
} from "./modal.styles";
import Close from "../../Icons/Close";
import DocumentCopy from "../../Icons/Document-copy";
import Whatsapp from "../../Icons/Whatsapp";
import { useEffect, useState } from "react";
import { Alert } from "../../Alerts/alert";

interface ShareModalProps {
  toggleModal: () => void;
}
export default function ShareModal({ toggleModal }: ShareModalProps) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setAlertMessage("URL copiada com sucesso!");
    });

    setTimeout(() => {
      setAlertMessage(null);
    }, 2000);
  };
  const handleShareToWhatsapp = () => {
    const message = `Olá, gostaria de compartilhar um curso com você. Acesse esse link: ${currentUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <StyledShare>
      {alertMessage && (
        <Alert
          message={alertMessage}
          type="success"
          onClose={() => setAlertMessage(null)}
        />
      )}
      <StyledModal>
        <ModalHeader>
          <ModalHeaderContainer>
            <ModalHeaderText>Compartilhar curso</ModalHeaderText>
            <ModalHeaderButton onClick={toggleModal}>
              <Close />
            </ModalHeaderButton>
          </ModalHeaderContainer>
        </ModalHeader>
        <ModalBody>
          <ModalInput>
            <ShareUrl>{currentUrl}</ShareUrl>
            <button
              onClick={handleCopyToClipboard}
              style={{ cursor: "pointer", background: "none", border: "none" }}
            >
              <DocumentCopy />
            </button>
          </ModalInput>
          <ModalBodyButton onClick={handleShareToWhatsapp}>
            <Whatsapp />
            Compartilhar no WhatsApp
          </ModalBodyButton>
        </ModalBody>
        <ModalFooter>
          <ModalFooterButton onClick={toggleModal}>Fechar</ModalFooterButton>
        </ModalFooter>
      </StyledModal>
    </StyledShare>
  );
}
