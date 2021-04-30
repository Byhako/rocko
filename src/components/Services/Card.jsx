import React from 'react'
import './styles.css'

export default function Card({ data }) {
  return (
    <div className='card'>
      <img src={data.image} alt="img"/>
      <p className="title">{data.title}</p>
      <p className="description">{data.description}</p>
    </div>
  )
}
