"use client";

import { useState } from "react";
import Share from "../Icons/Share";
import { FloatingButton } from "./styles";
import ShareModal from "./Modal/modal";

export default function ShareButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <FloatingButton onClick={toggleModal}>
        <Share />
      </FloatingButton>
      {isModalOpen && <ShareModal toggleModal={toggleModal} />}
    </>
  );
}
