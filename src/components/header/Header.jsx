import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";


const Header = () => {
  return (
      <div className="Header">
        <img src={Logo} alt="" className="logo" />
        <ul className="header-menu">
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
    </div>
  );
};

export default Header;
