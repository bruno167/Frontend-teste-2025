"use client";

import React, { useEffect, useState } from "react";
import { CloseButton, StyledAlert } from "./alert.styles";

interface AlertProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <StyledAlert type={type}>
      <p>{message}</p>
    </StyledAlert>
  );
};
