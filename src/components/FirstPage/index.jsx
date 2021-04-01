import Buttons from "../Buttons";
import LandImg from "../LandImg";
import NameBox from "../NameBox";
import { Container, LeftSide, RightSide, ScrollIcon } from "./style";
import scroll from "../images/down.svg";
import homeIMG from "../images/land.svg";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const FirstPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      let section = document.getElementsByClassName("active");
      if (section[0].name === "contact") {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    });
  }, []);
  return (
    <Container>
      <LeftSide>
        <LandImg img={homeIMG} />
      </LeftSide>
      <RightSide>
        <NameBox />
        <Buttons />
      </RightSide>
      {isVisible && <ScrollIcon src={scroll} alt={"scroll icon"} />}
    </Container>
  );
};

export default FirstPage;
