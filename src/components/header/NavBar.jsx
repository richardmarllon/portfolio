import { Link, animateScroll as scroll } from "react-scroll";
import NameBox from "../NameBox";
import { BtnGroup, HeaderContainer, LogoContainer, StyledName } from "./style";
import { i18n } from "../../translate/i18n";

const Navbar = () => {
  return (
    <HeaderContainer>
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <LogoContainer>
            <NameBox />
          </LogoContainer>
          <BtnGroup>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="first"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {i18n.t("buttons.proj1")}
            </Link>
            <Link
              activeClass="active"
              to="second"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {i18n.t("buttons.proj2")}
            </Link>
            <Link
              activeClass="active"
              to="third"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {i18n.t("buttons.proj3")}
            </Link>
            <Link
              activeClass="active"
              to="constact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {i18n.t("buttons.cont")}
            </Link>
          </BtnGroup>
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Navbar;
