import React, { useState } from 'react'
import Card from './Card'
import Carousel from '../Carousel'
import data from './data.js'
import './styles.css'

export default function Services() {
  const [service, setService] = useState('train')

  return (
    <section className='services' id='services'>
      <div className="buttons">
        <button
          onClick={() => setService('train')}
          className={service === 'train' ? 'btn-active' : ''}
        >Entrenamiento</button>
        <button
          onClick={() => setService('vet')}
          className={service === 'vet' ? 'btn-active' : ''}
        >Veterinaria</button>
      </div>

      <>
        {service === 'train' ? (
          <Carousel height='360px' bg='train' num={data.train.length} idx='train'>
            {data.train.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </Carousel>
        ) : (
          <Carousel height='360px' bg='vet' num={data.vet.length} idx='vet'>
          {data.vet.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </Carousel>
        )}
      </>
    </section>
  )
}
