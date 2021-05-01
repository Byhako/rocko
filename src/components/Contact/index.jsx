import React from 'react'
import Carousel from '../Carousel'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import face from '../../images/face.png'
import instagram from '../../images/instagram.png'

import images from './images.js'

import './styles.css'

export default function Contact() {
  return (
    <section className='contact' id='contact'>
      <p className="contact_title">Contactame</p>
      <p className="contact-description">
        Tu mascota es tu mejor amigo, contactame y juntos lo haremos realidad.
      </p>
      <div className="items">
        <div>
          <a href="https://www.facebook.com/rouxyr1" target="_blank" rel="noopener noreferrer">
            <img src={face} alt='face' /><span>Facebook</span>
          </a>
          <a href="https://www.instagram.com/rouxyrox/"  target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt='instagram' /><span>Instagram</span>
          </a>
        </div>

        <div>
          <a href="tel:3002846795"><FaPhoneAlt /><span>3002846795</span></a>
          <a href="mailto:rocko_pets@mail.com"><IoMail /><span>rocko_pets@mail.com</span></a>
        </div>
      </div>

      <div className="images">
      </div>

      <Carousel height='140px' bg='solid' num={images.length}>
        {images.map((item, index) => (
          <img className='imgfooter' src={item} alt={index} key={index} />
        ))}
      </Carousel>
    </section>
  )
}
