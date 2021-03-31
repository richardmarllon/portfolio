import React from "react";
import TitleContainer from "../TitleContainer";
import { i18n } from "../../translate/i18n";
import { StyledSection } from "./style";
import DescriptionBox from "../DescriptionBox";
import PreviewBox from "../PreviewBox";
import preview from "../images/image10.png";
import TecsBox from "../TecsBox";

const SecondSection = () => {
  const links = {
    github: "https://github.com/richardmarllon/kenziehub",
    pagina: "https://kenziehub-three-dun.vercel.app/",
  };
  return (
    <StyledSection>
      <TitleContainer>{i18n.t("titles.proj1")}</TitleContainer>
      <DescriptionBox>{i18n.t("messages.proj1")}</DescriptionBox>
      <PreviewBox img={preview} />
      <TecsBox links={links}>{i18n.t("messages.proj1tec")}</TecsBox>
    </StyledSection>
  );
};

export default SecondSection;
