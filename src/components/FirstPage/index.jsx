import Buttons from "../Buttons";
import LandImg from "../LandImg";
import NameBox from "../NameBox";
import { Container, LeftSide, RightSide, ScrollIcon } from "./style";
import scroll from "../images/down.svg";
import homeIMG from "../images/land.svg";
import { Link } from "react-scroll";
import LanguageSetter from "../LanguageSetter";

const FirstPage = ({ isVisible }) => {
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
      {isVisible && <ScrollIcon src={scroll} alt={"scroll icon"} />}
    </Container>
  );
};

export default FirstPage;
