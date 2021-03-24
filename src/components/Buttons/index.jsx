import { ButtonsContainer, StyledLink } from "./style";
import linkedin from "../images/linkedin-icon.svg";
import gitlab from "../images/gitlab-icon.svg";
import whatsapp from "../images/wpp.svg";
import { i18n } from "../../translate/i18n";

const Buttons = () => {
  return (
    <ButtonsContainer>
      <StyledLink
        src={linkedin}
        alt={"Linkedin profile link"}
        onClick={() =>
          window.open("https://www.linkedin.com/in/richardmarllon/", "_blank")
        }
      />
      <StyledLink
        src={gitlab}
        alt={"GitLab profile link"}
        onClick={() =>
          window.open("https://gitlab.com/richardmarllon", "_blank")
        }
      />
      <StyledLink
        src={whatsapp}
        alt={"WhatsApp Chat link"}
        onClick={() => window.open(i18n.t("buttons.wpp"), "_blank")}
      />
    </ButtonsContainer>
  );
};

export default Buttons;
