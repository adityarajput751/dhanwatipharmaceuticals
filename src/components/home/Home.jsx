import React from 'react'
import "./Home.css";
import Med from '../../assets/s1.jpg'
import Mec from '../../assets/bg-img91.jpg'

const Home = () => {
  return (
    <div className='Home'>
      <div className='home-l'>
        <img src={Med} alt='' />
      </div>
      <div className='home-r'>
      <span>WELCOME TO DHANWATI PHARMACEUTICALS</span>
        <span>“ A Hope for healthy future”</span>
        <span>Established in the year 2021, DHANWATI PHARMACEUTICALS stands for HOPE. It is a young and dynamic company enthusiastically involved in B2B, B2C, sourcing, exporting and business of regulatory consultancy services.</span>
        <img src={Mec} alt='' />
      </div>
    </div>
  )
}

export default Home