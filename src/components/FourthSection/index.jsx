import React from "react";
import TitleContainer from "../TitleContainer";
import { i18n } from "../../translate/i18n";
import { StyledSection } from "./style";
import DescriptionBox from "../DescriptionBox";
import PreviewBox from "../PreviewBox";
import TecsBox from "../TecsBox";
import rickys from "../images/rickys.gif";

const FourthSection = () => {
  const links = {
    github: "https://github.com/richardmarllon/kenziehub",
    pagina: "https://colections-chi.vercel.app/",
  };
  return (
    <StyledSection>
      <TitleContainer>{i18n.t("titles.proj3")}</TitleContainer>
      <DescriptionBox>{i18n.t("messages.proj3")}</DescriptionBox>
      <PreviewBox img={rickys} />
      <TecsBox links={links}>{i18n.t("messages.proj3tec")}</TecsBox>
    </StyledSection>
  );
};

export default FourthSection;
