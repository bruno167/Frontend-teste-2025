import { useState } from "react";
import { StyledLanguageButton, StyledLanguages } from "./languages.styles";

export default function Languages() {
  const [selectedLanguage, setSelectedLanguage] = useState("PT");

  const languages = ["PT", "EN", "ES"];

  const handleSelectedLanguage = (lang: string) => {
    setSelectedLanguage(lang);
  };

  return (
    <StyledLanguages>
      {languages.map((lang) => (
        <StyledLanguageButton
          key={lang}
          className={lang === selectedLanguage ? "active" : ""}
          onClick={() => handleSelectedLanguage(lang)}
        >
          {lang}
        </StyledLanguageButton>
      ))}
    </StyledLanguages>
  );
}
