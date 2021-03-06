import React from "react";
import TitleContainer from "../TitleContainer";
import { i18n } from "../../translate/i18n";
import { StyledSection } from "./style";
import DescriptionBox from "../DescriptionBox";
import PreviewBox from "../PreviewBox";
import preview from "../images/image10.png";
import TecsBox from "../TecsBox";
import habits from "../images/habits.gif";
const ThirdSection = () => {
  const links = {
    github: "https://github.com/richardmarllon/habitsmanagement",
    pagina: "https://habits-management-nunvh6ilh-grupo2.vercel.app/",
  };
  return (
    <StyledSection>
      <TitleContainer>{i18n.t("titles.proj2")}</TitleContainer>
      <DescriptionBox>{i18n.t("messages.proj2")}</DescriptionBox>
      <PreviewBox img={habits} />
      <TecsBox links={links}>{i18n.t("messages.proj2tec")}</TecsBox>
    </StyledSection>
  );
};

export default ThirdSection;
