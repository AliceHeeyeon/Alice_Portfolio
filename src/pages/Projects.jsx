import { useState, useEffect } from 'react'
import projectData from '../../Projects.json'
import {BsArrowRight} from 'react-icons/bs'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(0)
    const [currentImages, setCurrentImages] = useState({
        mainImage: projectData[0].image['main-image'],
        subImage: projectData[0].image['sub-image-1']
    })
    const [showbutton, setShowbutton] = useState(null)

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
    },[])

    const handleMouseEnter = (project) => {
        setSelectedProject(project.id)
        setCurrentImages({
            mainImage: project.image['main-image'],
            subImage: project.image['sub-image-1']
        })
        setShowbutton(project.id)
    }

    const mappedProjects = projectData.map((project, index) => {
        return (
            <div 
                key={project.id} 
                className='project-container'
            >
                <a href={`#/projects/${project.id}`}>
                    <div className='project'>
                        <div className='skills-container'>
                            <p>{project.skills[0]}</p>
                            <p>{project.skills[1]}</p>
                        </div>
                        <h3  
                            onMouseEnter={() => handleMouseEnter(project)}
                        >
                            {project.title}
                        </h3>
                        {showbutton === project.id && (
                            <button id='project-show'>
                                <BsArrowRight id='right-arrow'/>
                            </button>  
                        )}
                        
                    </div> 
                </a>     
            </div>
        )
    })

  return (
    <div className='project-page page-container'>
      <h4>SELECT A PROJECT</h4>
      <div className='project-wrapper'>
        <div className='project-list'>
            {mappedProjects}
        </div>
        <div className='project-image'>
            <img src={currentImages.mainImage} alt="Main" className='main-image'/>
            <img src={currentImages.subImage} alt="Sub" className='sub-image'/>
        </div>
      </div>
    </div>
  )
}

export default Projects
