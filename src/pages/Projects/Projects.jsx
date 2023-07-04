import React from 'react'

import devices from '../../assets/devices.webp'

import './Projects.css'

const Projects = () => {
  return (
    <div className="about">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-image-out">
            <img
              className="flip-image"
              src={devices}
              alt=""
            />
          </div>
          <div className="flip-text">
            <p className="p-name">title</p>
            <p className="p-desc">para</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
