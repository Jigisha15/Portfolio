import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
  const scrollToSection = (offset) => {
    scroll.scrollTo(offset, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }

  return (
    <div className="navbar">
      <div className="name">
        Jigisha <span className="surname">Ghanekar</span>
      </div>
      <ul>
        <li>
          <NavLink
            className="nav-links"
            // activeClassname="active"
            // to="/"
            onClick={() => scrollToSection(0)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-links"
            // activeClassName="active"
            // to="about"
            onClick={() => scrollToSection(50)}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-links"
            // activeClassName="active"
            // to="project"
            onClick={() => scrollToSection(500)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-links"
            // activeClassName="active"
            // to="contact"
            onClick={() => scrollToSection(1400)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
