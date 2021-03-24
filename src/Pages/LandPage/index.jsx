import FirstPage from "../../components/FirstPage";
import Navbar from "../../components/header/NavBar";
import { StyledDiv, StyledDiv2, StyledDiv1 } from "./style";

const LandPage = () => {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <FirstPage title="Section 1" dark={true} id="section1" />
      <StyledDiv title="Section 2" dark={false} id="section2" />
      <StyledDiv2 title="Section 2" dark={false} id="section3" />
    </div>
  );
};

export default LandPage;
