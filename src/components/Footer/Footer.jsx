import './Footer.css'
import { Link } from 'react-router-dom'

import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'
import { FaLocationDot } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="footer">
      
        <Link
          className="social-link"
          target="blank"
          to="https://www.instagram.com/jigisha4_/"
        >
          <BsInstagram />
        </Link>
        <Link
          className="social-link"
          target="blank"
          to="https://www.facebook.com/profile.php?id=100079070826837"
        >
          <FaFacebookF />
        </Link>
        <Link
          className="social-link"
          target="blank"
          to="https://github.com/Jigisha15"
        >
          <FaGithub />
        </Link>
        <Link
          className="social-link"
          target="blank"
          to="https://www.linkedin.com/in/jigisha-ghanekar/"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          className="social-link"
          target="blank"
          to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqWgZtRMqfXZfGnjXBKsQwDHsJZBQCgZXxwZkSXVBQVpQwTzVrxSSJHXXMBrczGxXVnFkL"
        >
          <SiGmail />
        </Link>
        <Link
          className="social-link"
          target="blank"
          to="https://www.google.com/maps/place/Goregaon,+Mumbai,+Maharashtra/@19.1527093,72.8580984,14z/data=!3m1!4b1!4m6!3m5!1s0x3be7b65a7edbbdb9:0xf447c38599143078!8m2!3d19.1662566!4d72.8525696!16zL20vMDJ5NGRq?entry=ttu"
        >
          <FaLocationDot />
        </Link>

    </div>
  )
}

export default Footer
