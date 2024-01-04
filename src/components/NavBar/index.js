import "./navbar.css";
import Logo from "../../assets/LOGOY.svg";
import Github from "../../assets/Github.svg";
import Linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";

const NavBar = () => {
  return (
    <nav>
      <img src={Logo} alt="logo" />
      <div className="burn">
        <ul className="navegacao">
          <li>Home</li>
          <li>About</li>
          <li>Tech Stack</li>
          <li>Projects</li>
          <li>Contact</li>
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
