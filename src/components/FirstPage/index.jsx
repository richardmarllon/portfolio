import Buttons from "../Buttons";
import LandImg from "../LandImg";
import NameBox from "../NameBox";
import { Container, LeftSide, RightSide, ScrollIcon } from "./style";
import scroll from "../images/down.svg";
import homeIMG from "../images/land.svg";
import LanguageSetter from "../LanguageSetter";

const FirstPage = ({ isVisible, section }) => {
  return (
    <Container>
      <LeftSide>
        <LandImg img={homeIMG} />
      </LeftSide>
      <RightSide>
        <NameBox />
        <Buttons />
        <LanguageSetter />
      </RightSide>
      {section === "Home" && <ScrollIcon src={scroll} alt={"scroll icon"} />}
      {section !== "contact" && section !== "Home" && (
        <ScrollIcon
          src={
            "https://icon-library.com/images/scroll-down-icon-png/scroll-down-icon-png-14.jpg"
          }
          style={{ maxWidth: "50px", animationDirection: "alternate" }}
          alt={"scroll icon"}
        />
      )}
      {section === "contact" && (
        <ScrollIcon
          src={scroll}
          alt={"scroll icon"}
          style={{
            transform: "translateX(50%) rotate(180deg)",
            animationDirection: "reverse",
          }}
        />
      )}
    </Container>
  );
};

export default FirstPage;
