import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';

const Header = ({ activePage, handleMenuClick }) => {
  const handleClick = (page) => {
    handleMenuClick(page);
  };

  return (
    <div className='Header'>
      <img src={Logo} alt='' className='logo' />
      <ul className='header-menu'>
        <li
          className={activePage === 'Home' ? 'active' : ''}
          onClick={() => handleClick('Home')}
        >
          Home
        </li>
        <li
          className={activePage === 'Services' ? 'active' : ''}
          onClick={() => handleClick('Services')}
        >
          Services
        </li>
        <li
          className={activePage === 'Vision' ? 'active' : ''}
          onClick={() => handleClick('Vision')}
        >
          Vision
        </li>
        <li
          className={activePage === 'Product' ? 'active' : ''}
          onClick={() => handleClick('Product')}
        >
          Product
        </li>
        <li
          className={activePage === 'Contact' ? 'active' : ''}
          onClick={() => handleClick('Footer')}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Header;
