import React, { useState } from 'react'
import Card from './Card'
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

      <div className="container">
        {service === 'train' ? (
          <>
            {data.train.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </>
        ) : (
          <>
          {data.vet.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </>
        )}
      </div>
    </section>
  )
}
