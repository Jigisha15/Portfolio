import './Projects.css'
import { useState } from 'react'

import Procard from '../../components/Procard/Procard'
import projects from '../../data/projects'

const Projects = () => {  
  // created the variable
  const [framework, setFramework] = useState('')

  // created function to set the value from the button click
  const handleClick = (framework) => {
    setFramework(framework)
  }

  const filteredProjects = projects.filter((projectGroup) => {
    // check if no other framework is selected
    // if(!framework) return true
    // filter projects based on the selected framework
    return projectGroup[0].type === framework;
  })

  return (
    <div className="projects">
      <div className="project-title">
        <h1>Projects</h1>
        <h3>Projects</h3>
      </div>

      <div className="project-cards-div">
        <div className="frameworks">
          <button className="fw" onClick={()=>handleClick('react')}>ReactJS</button>
          <button className="fw" onClick={()=>handleClick('next')}>NextJS</button>
          <button className="fw" onClick={()=>handleClick('django')}>Django</button>
          <button className="fw" onClick={()=>handleClick('flask')}>Flask</button>
        </div>
        <div className="project-cards">
          {filteredProjects.map((projectGroup) => (
            <div className="project-cards-inner" key={projectGroup[0].type}>
              {projectGroup.map((project) => (
                <Procard key={project.id} name={project.name} desc={project.desc} link={project.link} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
