import React, { useEffect, useState } from "react";
import { Container, TextMessage } from "./style";

const LanguageSetter = () => {
  const [isPortuguese, setIsPortuguese] = useState("");

  useEffect(() => {
    if (localStorage.getItem("i18nextLng") === "pt-BR") {
      setIsPortuguese(true);
    } else {
      setIsPortuguese(false);
    }
  }, [isPortuguese]);

  const handleLanguage = () => {
    if (isPortuguese) {
      localStorage.setItem("i18nextLng", "en-US");
      setIsPortuguese(false);
    } else {
      localStorage.setItem("i18nextLng", "pt-BR");
      setIsPortuguese(true);
    }
    document.location.reload();
  };

  return (
    <Container>
      <TextMessage onClick={handleLanguage}>
        {isPortuguese ? "view english version" : "ver em português"}
      </TextMessage>
    </Container>
  );
};

export default LanguageSetter;
