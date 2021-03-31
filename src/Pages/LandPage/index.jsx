import FirstPage from "../../components/FirstPage";
import Navbar from "../../components/header/NavBar";
import SecondSection from "../../components/SecondSection";
import { StyledDiv, StyledDiv2, StyledDiv1, StyledFirstPage } from "./style";

const LandPage = () => {
  return (
    <div className="App">
      <Navbar />
      <StyledDiv title="Home" dark={false} id="home">
        <FirstPage />
      </StyledDiv>
      <StyledDiv title="First Proj" dark={false} id="first">
        <SecondSection />
      </StyledDiv>
      <StyledDiv2 title="Second Proj" dark={false} id="second" />
    </div>
  );
};

export default LandPage;
