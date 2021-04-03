import { useState, useEffect } from "react";
import ContactSection from "../../components/ContactSection";
import FirstPage from "../../components/FirstPage";
import FourthSection from "../../components/FourthSection";
import Navbar from "../../components/header/NavBar";
import SecondSection from "../../components/SecondSection";
import ThirdSection from "../../components/ThirdSection";
import { StyledDiv } from "./style";

const LandPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [section, setSection] = useState("Home");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let section = document.getElementsByClassName("active");
      setSection(section[0].name);
      if (section[0].name === "contact") {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    });
  }, [section]);

  return (
    <div className="App">
      <Navbar setIsVisible={setIsVisible} section={section} />
      <StyledDiv dark={false} id="home">
        <FirstPage isVisible={isVisible} section={section} />
      </StyledDiv>
      <StyledDiv dark={false} id="first">
        <SecondSection />
      </StyledDiv>
      <StyledDiv dark={false} id="second">
        <ThirdSection />
      </StyledDiv>
      <StyledDiv dark={false} id="third">
        <FourthSection />
      </StyledDiv>
      <StyledDiv dark={false} id="contact">
        <ContactSection />
      </StyledDiv>
    </div>
  );
};

export default LandPage;
