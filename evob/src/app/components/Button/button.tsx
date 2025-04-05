"use client";

import { ReactNode } from "react";
import { PrimaryButton } from "./button.styles";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}
