import React, { useState, useEffect } from 'react'
import { RiPhoneLine } from "react-icons/ri"
import { GoMail } from "react-icons/go"
import logo1 from '../../images/logo.svg'
import logo2 from '../../images/logo2.svg'
import './styles.css'

export default function Header() {
  const [state, setState] = useState('light');
  const [isActive, setIsActive] = useState('');


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 50 && scrollY < 200) {
        setState('light fix')
      } else if (scrollY >= 200) {
        setState('fix dark')
        setIsActive('about')
      } else {
        setState('light')
        setIsActive('')
      }
    }

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    };
  }, [])

  return (
    <header className='header' id='head'>
      <div className='head'>
        <p className="location">Medellín, &nbsp; Colombia</p>
        <p className="phone">
          <a href="tel:3002846795">
            <RiPhoneLine />
            <span>300 284 6795</span>
          </a>
        </p>
        <p className="mail">
          <a href="mailto:rockopets@gmail.com">
            <GoMail />
            <span>rockopets@gmail.com</span>
          </a>
        </p>
      </div>

      <nav className={state}>
        <a href='#head' className="logo">
          {state !== 'fix dark' ? (
            <img src={logo1} alt="logo"/>
            ) : (
            <img src={logo2} alt="logo"/>
          )}
        </a>
        <div className='links'>
          <a href="#services" className={isActive === 'services' && 'active'}>Servicios</a>
          <a href="#about" className={isActive === 'about' && 'active'}>Conóceme</a>
          <a href="#contact" className={isActive === 'contact' && 'active'}>Contactame</a>
        </div>
      </nav>
    </header>
  )
}
