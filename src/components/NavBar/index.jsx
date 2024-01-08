import "./navbar.css";
import { Link } from "react-scroll";
import Logo from "../../assets/LOGOY.svg";
import Github from "../../assets/Github.svg";
import Linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";

const NavBar = () => {
  return (
    <nav className="menu">
      <img src={Logo} alt="logo" />
      <div className="burn">
        <ul className="navegacao">
          <li>
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link to="tech" spy={true} smooth={true} offset={50} duration={500}>
              Tech Stack
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="sociais">
          <a href="https://github.com/yasgmin" className="oi">
            <img src={Github} alt="Github"></img>
          </a>
          <a href="https://www.linkedin.com/in/yasgmin/" className="oi">
            <img src={Linkedin} alt="Linkedin" a=""></img>
          </a>
          <a href="https://www.instagram.com/yasmingdev/" className="oi">
            <img src={instagram} alt="Instagram" a=""></img>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
