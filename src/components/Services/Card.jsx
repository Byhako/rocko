import React, { useState } from 'react'
import './styles.css'

export default function Card({ data }) {
  const [over, setOver] = useState(false)

  return (
    <div
      className='card'
      onMouseEnter={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
    >
      <img src={data.image} alt="img"/>
      <div
        className="over_card"
        style={over ? {top: 0} : {top: '60%'}}
      >
        <p className="title">{data.title}</p>
        <p
          className="description"
          style={over ? {display: 'block'} : {display: 'none'}}
        >{data.description}</p>
      </div>
    </div>
  )
}
