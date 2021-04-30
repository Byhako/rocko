import React from 'react'
import './styles.css'

export default function index() {
  return (
    <section className='about' id='about'>
      <div className="over2">
        <div className="about-content">
          <p className="about-title">
            Conóceme
          </p>
          <p className="about-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
          <p className="about-title">
            Crecenciales
          </p>
          <ul className="about-list">
            <li>Pregrado en Veterinaria.</li>
            <li>Marter en psicología canina.</li>
            <li>Campeonato intercontinental de Agility.</li>
            <li>Especialista en clientes molestos.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
