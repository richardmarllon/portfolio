import React from "react";
import Buttons from "../Buttons";
import NameBox from "../NameBox";
import {
  Container,
  GenericText,
  ProfilePic,
  ResumeBtn,
} from "./style";
import { i18n } from "../../translate/i18n";
import profilepic from "../images/profile.jpg";

const ContactBox = () => {
  return (
    <Container>
      <ProfilePic src={profilepic} />
      <NameBox />
      <Buttons />
      <ResumeBtn
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1JMi_QuNInXU2Snv-W_k-Ak4OL9unOesm/view?usp=sharing",
            "_blank"
          )
        }
      >
        {i18n.t("buttons.down")}
      </ResumeBtn>
      <GenericText>richard_marllon@hotmail.com</GenericText>
    </Container>
  );
};

export default ContactBox;
