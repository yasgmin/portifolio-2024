import "./footer.css";
import logo from "../../assets/LOGOY.svg";

const Footer = () => {
  return (
    <div className="principalFooter" id="contact">
      <div className="logoYa">
        <img src={logo} alt="logo yasmin" />
        <p>yasgminvlr@gmail.com</p>
      </div>
      <footer>
        <div className="Love">
          Made With <span>Love</span> & <span>Coffee</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
