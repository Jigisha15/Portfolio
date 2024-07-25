import React, { useEffect, useState } from 'react'
import './Projects.css'
import projects from '../../data/projects'
import { Link } from 'react-router-dom'

const Projects = () => {

  const allTypes = ['react', 'next', 'flask', 'django']
  
  const [selectedType, setSelectedType] = useState('all')
  const [modal, setModal] = useState()
  const [index, setIndex] = useState(0)
  
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [modal])

  const handleSelect = (type) => {
    setSelectedType(type)
  }
  
  const handleOpenModal = (e) => {
    setModal(true)
    setIndex(e)
    console.log(index,modal)
  }

  const handleCloseModal = () => {
    setModal(false)
    console.log(modal)
  }

  const filteredProjects = selectedType === 'all' ? projects : projects.filter(project=>project.type===selectedType)
  console.log(filteredProjects)


  return (
    <>
    <div className={modal?'projectspage-new':'projectspage'}>
        <h1 className='project-title'>Projects</h1>
        <h1 className='small-project-title'>Projects</h1>
        <div className="projectspage-inner">
          <div className="project-left">
            {allTypes.map(type => (
              <button key={type} onClick={()=>handleSelect(type)}>{type.charAt(0).toUpperCase()+type.slice(1)}</button>
            ))}
            <button onClick={()=>handleSelect('all')}>All</button>
          </div>
          <div className="project-right">
            {filteredProjects.map(project => (
              <button onClick={()=>handleOpenModal(project.id)} className='modal-button' key={project.id}>
              {project.name}
              </button>
            ))}
          </div>
        </div>
          {modal && index && (
            <div className='modal'>
              <button onClick={handleCloseModal}>X</button>
              <div className="modal-data">
                <h1 className="modal-title">{projects[index-1].name}</h1>
                <h1 className="modal-desc">{projects[index-1].desc}</h1>
                <Link to={projects[index-1].link} target='blank' className='repo-link'>Repository</Link>
              </div>
            </div>
          )}
    </div>
    </>
  )
}

export default Projects
