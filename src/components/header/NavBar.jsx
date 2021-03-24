import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          seção 1
        </Link>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          seção 2
        </Link>
        <Link
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          seção 3
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
