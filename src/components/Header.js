import React from 'react'
import '../styles/Header.css';
import logo from "../assets/logoReachOutHuman.png";
function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img className='header__logo' src={logo} alt="reach out human"/>
      </div>
      <div className='header__right'>
        <ul className='header__menu'>
          <li> <a src="#">Home</a></li>
          <li> <a src="#">Event</a></li>
          <li> <a src="#">About</a></li>
          <li> <a src="#">Volunteer</a></li>
          <li> <a src="#">Contact</a></li>

        </ul>

      </div>
    </div>
  )
}

export default Header