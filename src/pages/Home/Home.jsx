import './Home.css'
import resume from '../../assets/jigishasResume.pdf'
import {animateScroll as scroll} from 'react-scroll'

const Home = () => {

  return (
    <div className="homepage">
      <div className="home-enclose">
        <div className="home-left">
          <h1 className='hello'>HELLO</h1>
          <h1 className="home-name">I'm <span>Jigisha Ghanekar</span></h1>
          <h1 className="qualities">A Developer</h1>
          <p className="current">A final year computer science student</p>
          <div className="buttons">
              <button className="button">
                <a href={resume} download="resume">My Resume</a>
              </button>
             <button className="button">My Projects
             </button>
           </div>
        </div>
        <div className="home-right">
          <img
            src="https://i.pinimg.com/564x/80/97/15/8097155b1364cbbf729fdcee9fa96dcd.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Home
