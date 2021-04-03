import React from "react";
import Buttons from "../Buttons";
import NameBox from "../NameBox";
import { Container, GenericText, ProfilePic, ResumeBtn } from "./style";
import { i18n } from "../../translate/i18n";
import profilepic from "../images/profile.jpg";
import { Fade } from "react-awesome-reveal";

const ContactBox = () => {
  return (
    <Fade>
      <Container>
        <ProfilePic src={profilepic} />
        <NameBox />
        <Buttons />
        <ResumeBtn
          onClick={() => window.open(`${i18n.t("buttons.downlink")}`, "_blank")}
        >
          {i18n.t("buttons.down")}
        </ResumeBtn>
        <GenericText>richard_marllon@hotmail.com</GenericText>
      </Container>
    </Fade>
  );
};

export default ContactBox;
