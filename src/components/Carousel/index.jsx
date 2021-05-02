import React, { useState, useEffect } from 'react'
import { FaAngleLeft } from "react-icons/fa"
import { FaAngleRight } from "react-icons/fa"
import './styles.css'

export default function Carousel({ bg, height, children, num, idx, size }) {
  
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const screem = window.innerWidth - 80;

    if (num*size >= screem) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }, [num, size])

  const scrollRight = () => {
    const child = document.getElementById(idx)
    const pos = child.scrollLeft + 100
    child.scrollTo(pos , 0)
  }

  const scrollLeft = () => {
    const child = document.getElementById(idx)
    const pos = child.scrollLeft - 100
    child.scrollTo(pos , 0)
  }
  
  return (
    <div
      className={`carousel ${bg ? bg : 'solid'}`}
      style={{ height: height }}
    >
      <div
        className="arrow arrowleft"
        onClick={scrollLeft}
        style={scroll ? { display: 'flex' } : { display: 'none' }}
      >
        <FaAngleLeft />
      </div>
      <div
        className="child"
        id={idx}
        style={scroll ? {} : { justifyContent: 'space-around' }}
      >
        {children}
      </div>
      <div
        className="arrow arrowright"
        style={scroll ? { display: 'flex' } : { display: 'none' }}
        onClick={scrollRight}
      >
        <FaAngleRight />
      </div>
    </div>
  )
}
