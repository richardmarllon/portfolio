import React from "react";
import { BtnContainer, ContainerBox, StyledBtn, TextBox } from "./style";
import { i18n } from "../../translate/i18n";

const TecsBox = ({ children, links }) => {
  return (
    <ContainerBox>
      <TextBox>{children}</TextBox>
      <BtnContainer>
        <StyledBtn
          onClick={() => {
            window.open(`${links.github}`, "_blank");
          }}
        >
          github
        </StyledBtn>
        <StyledBtn
          onClick={() => {
            window.open(`${links.pagina}`, "_blank");
          }}
        >
          {i18n.t("buttons.pagina")}
        </StyledBtn>
      </BtnContainer>
    </ContainerBox>
  );
};

export default TecsBox;
