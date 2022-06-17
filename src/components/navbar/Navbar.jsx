import React, { useState } from 'react'
import './navbar.css'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";

const Navbar = () => {
  const acher = (e)=>{
    e.preventDefault()
  }
  const Menu = () => {
    <>
      <li><a onClick={(e)=> e.preventDefault()} href="#home">Home</a></li>
      <li><a onClick={(e)=> e.preventDefault()} href={`/app/gpt`}>What is GPT?</a></li>
      <li><Link  onClick={acher} >Open AI</Link></li>
      <li><a onClick={acher} href="#ai">Case Studies</a></li>
      <li><a onClick={acher} href="#library">Library</a></li>
    </>
  }

  const [toggle, settoggle] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <div className="nav__link flex__center">
          <div className='nav_logo'>
            <img src={logo} alt="logo" />
          </div>
          <ul className='flex__center'>
            <li><a href="/">Home</a></li>
            <li><a href="/">What is GPT?</a></li>
            <li><a href="/">Open AI</a></li>
            <li><a href="/">Case Studies</a></li>
            <li><a href="/">Library</a></li>
          </ul>
        </div>

        <div className="nav__signup nav__sign flex__center">
          <p type='button'>Sign in</p>
          <button type='button'>Sign up</button>

        </div>
        <div className="navbar__menu">
          {toggle ?
            <RiCloseLine color='#fff' size={27} onClick={() => settoggle(false)} /> :
            <RiMenu3Line color='#fff' size={27} onClick={() => settoggle(true)} />

          }
          {
            toggle && (
              <div className="gp3_navbar_menu_container scale-up-center">
                <div className="gpt3_navbar-menu_container-links">
                  <li><a href="/">Home</a></li>
                  <li><a href="/">What is GPT?</a></li>
                  <li><a href="/">Open AI</a></li>
                  <li><a href="/">Case Studies</a></li>
                  <li><a href="/">Library</a></li>
                  <div className="nav__signup_menu_container nav__sign flex__center">
                    <p type='button'>Sign in</p>
                    <button type='button'>Sign up</button>

                  </div>
                </div>
              </div>
            )
          }
        </div>
      </nav>
    </>
  )
}

export default Navbar