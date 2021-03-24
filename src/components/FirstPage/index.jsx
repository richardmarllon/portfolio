import Buttons from "../Buttons";
import LandImg from "../LandImg";
import NameBox from "../NameBox";
import { Container, LeftSide, RightSide, ScrollIcon } from "./style";
import scroll from "../images/down.svg";
import { Link } from "react-scroll";
const FirstPage = () => {
  return (
    <Container>
      <LeftSide>
        <LandImg />
      </LeftSide>
      <RightSide>
        <NameBox />
        <Buttons />
      </RightSide>
      <Link to="section2" smooth={true}>
        <ScrollIcon src={scroll} alt={"scroll icon"} />
      </Link>
    </Container>
  );
};

export default FirstPage;
