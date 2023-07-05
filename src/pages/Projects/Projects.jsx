import React from 'react'

import dental from '../../assets/dental.png'
import blogs from '../../assets/blogs.png'
import portfolio from '../../assets/portfolio.png'
import food from '../../assets/food.png'
import login from '../../assets/login.png'

import Flipcard from '../../components/Flipcard/Flipcard'

import './Projects.css'

const Projects = () => {
  const data = [
    {
      id: 1,
      image: dental,
      title: 'Dental Clinic Management System',
      text: 'It is a full stack webapp made using Django for backend and database and Bootstrap for frontend. It has user authentication, make and manage applications, get location, etc.',
      link: 'https://github.com/Jigisha15/DentalClinic',
    },
    {
      id: 2,
      image: blogs,
      title: 'Blogging App',
      text: 'This is a Blogging App made using Django. With this app you can post and view blogs. It has user authentication added.',
      link: 'https://github.com/Jigisha15/Blogs',
    },
    {
      id: 3,
      image: food,
      title: 'Food Ordering Website',
      text: 'This is a full stack website made using ReactJS. It has planned features like user authentication, contact the admin, Order online along with a user-friendly UI.',
      link: 'https://github.com/Jigisha15/Food',
    },
    {
      id: 4,
      image: portfolio,
      title: 'My Portfolio',
      text: 'This is my Portfolio made using ReactJs. You can share the link and contact me!',
      link: 'https://github.com/Jigisha15/Portfolio',
    },
    {
      id: 5,
      image: login,
      title: 'UI for Login & Registeration',
      text: 'This is a small UI made using vanilla HTML,CSS in ReactJS framework. You can use this for adding a login and registeration page in your website along with custom images.',
      link: 'https://github.com/Jigisha15/Clone',
    },
  ]

  console.log(data)

  return (
    <div className="container">
      <h1 className="outer-text">Here are my Projects</h1>
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
              link={item.link}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
