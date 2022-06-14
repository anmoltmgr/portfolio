import React from 'react'
import './Header.css'

import CTA from './CTA'
import HeaderSocial from './HeaderSocial'

import profile_picture from '../../assets/profile.png'
 
const Header = () => {
  return (
    <header>
      <div className="container header-container" >
        <h5>Hello,  I'm </h5>
        <h1>Anmol</h1>
        <h5 className='text-light'> Fullstack Developer </h5>
        <CTA/>
        <HeaderSocial/>
      
      <div className='profile-picture'>
        <img src={profile_picture} alt="profile-pic" />
      </div>
        <a href="#contact" className='scroll-down'>Scroll Down</a>
      
      </div>
      
    </header>
  )
}

export default Header