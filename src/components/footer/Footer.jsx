import React from "react";
import "./Footer.css";
import Indiamart from "../../assets/INDIAMART.NS-ecf147e0.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/icons8-facebook-48.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Indiamart} alt="" />
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
