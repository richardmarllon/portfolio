import React from "react";
import TitleContainer from "../TitleContainer";
import { i18n } from "../../translate/i18n";
import { LeftSide, StyledSection, RightSide } from "./style";
import DescriptionBox from "../DescriptionBox";
import PreviewBox from "../PreviewBox";
import preview from "../images/image10.png";
import TecsBox from "../TecsBox";
import kenziehub from "../images/kenziehub.gif";
import ContactBox from "../ContactBox";
import LandImg from "../LandImg";
import contactimg from "../images/contact.svg";

const ContactSection = () => {
  const links = {
    github: "https://github.com/richardmarllon/kenziehub",
    pagina: "https://kenziehub-three-dun.vercel.app/",
  };
  return (
    <StyledSection>
      <TitleContainer>{i18n.t("buttons.cont")}</TitleContainer>
      <LeftSide>
        <LandImg img={contactimg} />
      </LeftSide>
      <RightSide>
        <ContactBox />
      </RightSide>
    </StyledSection>
  );
};

export default ContactSection;
