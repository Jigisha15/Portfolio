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
            onClick={() => scrollToSection(0)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-links"
            onClick={() => scrollToSection(50)}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-links"
            onClick={() => scrollToSection(600)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-links"
            onClick={() => scrollToSection(1000)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
