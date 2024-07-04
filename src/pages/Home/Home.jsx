import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="bg-image">
        <img
          src="https://i.pinimg.com/564x/80/97/15/8097155b1364cbbf729fdcee9fa96dcd.jpg"
          alt=""
        />
      </div>

      <div className="home-intro">
        <h1 className='hello'>Hello</h1>
        <h1 className="name">I'm <span>Jigisha Ghanekar</span></h1>
        <h1 className='qualities'>A Developer</h1>
        <p className="current">A 4th year Computer Science Undergrad</p>
        <div className="buttons">
          <button>My Socials</button>
          <button>My Projects</button>
        </div>
      </div>
    </div>
  )
}

export default Home
