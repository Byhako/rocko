import React from 'react'
import { MdPets } from "react-icons/md";
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
            Los animales han tenido un lugar fundamental en mi vida. Son seres nobles,
            inocentes y fieles compañeros. Cada peludo tiene su propia forma de ser,
            pero en cada uno hay un gran compañero; es por eso que he dedicado mi vida
            a aprender a cuidarlos, entenderles y con ello buscar mejorar la relación
            entre el canino y su amo.
          </p>

          <p className="about-text">
            Mis estudios en veterinaria, nutrición, el entrenamiento y actividad deportiva
            con perros, me han dado el conocimiento para dar un acompañamiento íntegro y
            responsable a cada proceso particular.
          </p>

          <ul className="about-list">
            <li><MdPets /> &nbsp; Veterinaria.</li>
            <li><MdPets /> &nbsp; Especialización en proceso de etología y bienestar animal.</li>
            <li><MdPets /> &nbsp; Curso Adiestramiento Canino.</li>
            <li><MdPets /> &nbsp; Diplomado en curso de Etología clínica.</li>
            <li><MdPets /> &nbsp; Primer puesto en competencia Agility.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
