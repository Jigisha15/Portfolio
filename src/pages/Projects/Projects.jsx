import React from 'react'

import dental from '../../assets/dental.png'
import blogs from '../../assets/blogs.png'
import portfolio from '../../assets/portfolio.png'
import food from '../../assets/food.png'
import login from '../../assets/login.png'
import xzect from '../../assets/xzect.png'
import dairy from '../../assets/dairy.png'

import Flipcard from '../../components/Flipcard/Flipcard'

import './Projects.css'

const Projects = () => {
  const data = [
    {
      image: dental,
      title: 'Dental Clinic Management System',
      text: 'It is a full stack webapp made using Django for backend and database and Bootstrap for frontend. It has user authentication, make and manage applications, get location, etc.',
      link: 'https://github.com/Jigisha15/DentalClinic',
    },
    {
      image: blogs,
      title: 'Blogging App',
      text: 'This is a Blogging App made using Django. With this app you can post and view blogs. It has user authentication added.',
      link: 'https://github.com/Jigisha15/Blogs',
    },
    {
      image: dairy,
      title: 'Dairy Management App',
      text: 'This is my first Django project that I made with the help of a YouTube tutorial of which the link is provided in my GitHub ReadMe.',
    },
    {
      image: food,
      title: 'Food Ordering Website',
      text: 'This is a full stack website made using ReactJS. It has planned features like user authentication, contact the admin, Order online along with a user-friendly UI.',
      link: 'https://github.com/Jigisha15/Food',
    },
    {
      image: portfolio,
      title: 'My Portfolio',
      text: 'This is my Portfolio made using ReactJs. You can share the link and contact me!',
      link: 'https://github.com/Jigisha15/Portfolio',
    },
    {
      image: login,
      title: 'UI for Login & Registeration',
      text: 'This is a small UI made using vanilla HTML,CSS in ReactJS framework. You can use this for adding a login and registeration page in your website along with custom images.',
      link: 'https://github.com/Jigisha15/Clone',
    },
    {
      image: xzect,
      title: 'Clone Webiste',
      text: 'This is a clone of an existing webiste to kickstart my journey in NextJS framework. The styling is entirely done using CSS.',
      link: 'https://github.com/Jigisha15/Xzect',
    },
  ]

  console.log(data)

  return (
    <div className="container">
      <h1 className="outer-text">Here are my Projects</h1>
      <div className="outer">
        {data.map((item, index) => (
          <div
            className="project"
            key={index}
          >
            <Flipcard
              image={item.image}
              title={item.title}
              text={item.text}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
