import { Link } from 'react-router-dom'
import './Procard.css'

const Procard = ({ name, desc, link}) => {
  return (
    <div className="procard">
      <img
        src={require('../../assets/blog.png')}
        alt=""
        />
      <h1 className="project-name">{ name }</h1>
      <p className="project-desc">{ desc }</p>
      <Link className='repo' to={link} target='blank'>Repository</Link>
    </div>
  )
}

export default Procard

// src="https://i.pinimg.com/564x/3b/9b/7c/3b9b7ccdcd1d5b11599271c4d220dd37.jpg"