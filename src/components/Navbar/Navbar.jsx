import React from 'react'
import { NavLink } from 'react-router-dom'

import { SiGithub } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'
import { SiInstagram } from 'react-icons/si'
import { SiFacebook } from 'react-icons/si'
import { IoLocationSharp } from 'react-icons/io5'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink
            className="nav-li active"
            to="https://github.com/Jigisha15"
          >
            <SiGithub className="icon" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li active"
            to="https://www.linkedin.com/in/jigisha-ghanekar"
          >
            <SiLinkedin className="icon" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li active"
            to="https://www.instagram.com/jigisha4_/"
          >
            <SiInstagram className="icon" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li active"
            to="https://www.facebook.com/profile.php?id=100079070826837"
          >
            <SiFacebook className="icon" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li active"
            to="https://goo.gl/maps/BArbUpU5Wcgv52k37"
          >
            <IoLocationSharp className="icon" />
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
