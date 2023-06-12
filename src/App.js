
import './App.css';
import React from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Vision from './components/vision/Vision';
import Product from './components/products/Product';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Services />
      <Vision />
      <Product />
      <Footer />
    </div>
  )
}

export default App
