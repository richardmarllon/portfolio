import { useState, useEffect } from "react";
import ContactSection from "../../components/ContactSection";
import FirstPage from "../../components/FirstPage";
import FourthSection from "../../components/FourthSection";
import Navbar from "../../components/header/NavBar";
import SecondSection from "../../components/SecondSection";
import ThirdSection from "../../components/ThirdSection";
import { StyledDiv, StyledDiv2, StyledDiv1, StyledFirstPage } from "./style";

const LandPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [section, setSection] = useState("");

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

  console.log(section);
  return (
    <div className="App">
      <Navbar setIsVisible={setIsVisible} section={section} />
      <StyledDiv title="Home" dark={false} id="home">
        <FirstPage isVisible={isVisible} />
      </StyledDiv>
      <StyledDiv title="First Project" dark={false} id="first">
        <SecondSection />
      </StyledDiv>
      <StyledDiv title="Second Project" dark={false} id="second">
        <ThirdSection />
      </StyledDiv>
      <StyledDiv title="Third Project" dark={false} id="third">
        <FourthSection />
      </StyledDiv>
      <StyledDiv title="Third Project" dark={false} id="contact">
        <ContactSection />
      </StyledDiv>
    </div>
  );
};

export default LandPage;
