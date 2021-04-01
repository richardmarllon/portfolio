import FirstPage from "../../components/FirstPage";
import FourthSection from "../../components/FourthSection";
import Navbar from "../../components/header/NavBar";
import SecondSection from "../../components/SecondSection";
import ThirdSection from "../../components/ThirdSection";
import { StyledDiv, StyledDiv2, StyledDiv1, StyledFirstPage } from "./style";

const LandPage = () => {
  return (
    <div className="App">
      <Navbar />
      <StyledDiv title="Home" dark={false} id="home">
        <FirstPage />
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
      <StyledDiv2 title="Second Proj" dark={false} id="third" />
    </div>
  );
};

export default LandPage;
