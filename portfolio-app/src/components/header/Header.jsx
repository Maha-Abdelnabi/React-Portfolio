import React from 'react'
import './header.css'
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <Header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Maha Abdelnabi</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src="#" alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </Header>
  )
}

export default Header;