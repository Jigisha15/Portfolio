import React from 'react'

import devices from '../../assets/devices.webp'

import './Flipcard.css'

const Flipcard = ({ image, title, text }) => {
  return (
    <div className="flipcard">
      <div className="single-card">
        <div className="front">
          <img
            src={image}
            alt=""
          />
        </div>
        <div className="back">
          <div className="content">
            <h2>{title}</h2>
            <h4>{text}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flipcard
