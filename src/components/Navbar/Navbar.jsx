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
            to="/home"
          >
            {/* Home */}
            <SiGithub />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li active"
            to="/about"
          >
            {/* About */}
            <SiLinkedin />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-li active">
            {/* Projects */}
            <SiInstagram />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-li active">
            {/* Contact Me  */}
            <SiFacebook />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-li active">
            {/* Contact Me  */}
            <SiGmail />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-li active">
            {/* Contact Me  */}
            <IoMdCall />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-li active">
            {/* Contact Me  */}
            <IoLocationSharp />
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
