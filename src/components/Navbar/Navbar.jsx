import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="name">
        Jigisha <span className="surname">Ghanekar</span>
      </div>
      <ul>
        <li>
          <NavLink
            className="nav-links"
            activeClassName="active"
            to="home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-links"
            activeClassName="active"
            to="about"
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-links"
            activeClassName="active"
            to="project"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-links"
            activeClassName="active"
            to="contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
