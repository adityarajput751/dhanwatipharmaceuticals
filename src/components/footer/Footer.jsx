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
          <a href="https://www.indiamart.com/dhanwati-pharmaceuticals/" target="_blank" rel="noopener noreferrer">
            <img src={Indiamart} alt="" />
          </a>
          <a href="https://m.facebook.com/p/Dhanwati-Pharmaceuticals-100084223115607/">
          <img src={Facebook} alt="" />
          </a>
         <a href="https://www.instagram.com/dhanwantripharmaceutical/">
         <img src={Instagram} alt="" />
         </a>
         
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
        <div>
            <span>Address- Mandawar, Bijnor, Uttar Pradesh</span>
            <span>Mobile Number- +91 9634789631</span>
            <span>Email- dhanwantripharmaceuticals@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
