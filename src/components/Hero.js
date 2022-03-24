import React from 'react'
import '../styles/Hero.css';
import heroImage from "../assets/hero__image.png";
import CallToAction from './CallToAction';

function Hero() {
    

  
  return (
    <div className='hero'>
        
        <div className='hero__container'>

         <div className='hero__left'>
          <h3 className='hero__topText'>A non-profit organisation</h3>
          <h1 className='hero__mainText'>Lend a hand for less fortunate.</h1>
          <CallToAction color="red" text="Donate Now"/>
          <CallToAction color="blue"   text="What we do"/>
          

         </div>
         <img className="hero__rightWithImage" src={heroImage} alt="heroImage"/>


         


        </div>
        
    </div>
  )
}

export default Hero