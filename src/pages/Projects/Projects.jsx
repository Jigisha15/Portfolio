import React from 'react'

import devices from '../../assets/devices.webp'
import crepe from '../../assets/crepe.jpg'
import keyboard from '../../assets/keyboard.jpg'

import Flipcard from '../../components/Flipcard/Flipcard'

import './Projects.css'

const Projects = () => {
  const data = [
    {
      id: 1,
      image: devices,
      title: 'Project Title 1',
      text: 'Project information 1',
    },
    {
      id: 2,
      image: crepe,
      title: 'Project Title 2',
      text: 'Project information 2',
    },
    {
      id: 3,
      image: keyboard,
      title: 'Project Title 3',
      text: 'Project information 3',
    },
  ]

  console.log(data)

  return (
    <div className="outer">
      {data.map((item) => (
        <div
          className="project"
          key={item.id}
        >
          <Flipcard
            image={item.image}
            title={item.title}
            text={item.text}
          />
        </div>
      ))}
    </div>
  )
}

export default Projects
