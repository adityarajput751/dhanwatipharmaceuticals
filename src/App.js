import React, { useState, useRef } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Vision from './components/vision/Vision';
import Product from './components/products/Product';
import Footer from './components/footer/Footer';

const App = () => {
  const [activePage, setActivePage] = useState('Home');
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const visionRef = useRef(null);
  const productRef = useRef(null);
  const footerRef = useRef(null);

  const handleMenuClick = (page) => {
    setActivePage(page);
    scrollToSection(page);
  };

  const scrollToSection = (section) => {
    let ref;
    switch (section) {
      case 'Home':
        ref = homeRef;
        break;
      case 'Services':
        ref = servicesRef;
        break;
      case 'Vision':
        ref = visionRef;
        break;
      case 'Product':
        ref = productRef;
        break;
      case 'Footer':
        ref = footerRef;
        break;
      default:
        ref = null;
    }
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='App'>
      <Header activePage={activePage} handleMenuClick={handleMenuClick} />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={visionRef}>
        <Vision />
      </div>
      <div ref={productRef}>
        <Product />
      </div >
      <div ref={footerRef}>
      <Footer />
      </div>
    </div>
  );
};

export default App;
