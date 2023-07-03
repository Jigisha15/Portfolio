import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import { SiGithub } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'
import { SiInstagram } from 'react-icons/si'
import { SiFacebook } from 'react-icons/si'
import { SiGmail } from 'react-icons/si'
import { IoMdCall } from 'react-icons/io'
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
            {/* Home */}
            <SiGithub />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li active"
            to="https://www.linkedin.com/in/jigisha-ghanekar"
          >
            {/* About */}
            <SiLinkedin />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li active"
            to="https://www.instagram.com/jigisha4_/"
          >
            {/* Projects */}
            <SiInstagram />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li active"
            to="https://www.facebook.com/profile.php?id=100079070826837"
          >
            {/* Contact Me  */}
            <SiFacebook />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-li active">
            {/* Contact Me  */}
            <IoMdCall />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li active"
            to="https://goo.gl/maps/BArbUpU5Wcgv52k37"
          >
            {/* Contact Me  */}
            <IoLocationSharp />
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
