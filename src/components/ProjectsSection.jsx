
import React from 'react'
import CarouselItem from './CarouselItem';
import wanderlust from './images/wanderlust.png'


function ProjectsSection() {

  const handleClickWebsite = () => {
    window.open("https://foundations26-capstone-project.herokuapp.com/");
  };

  return (
    <div className='project'>
      <h1>Projects</h1>
      <div className='project-container'>
        <div className='project-card'>
          <h3>Hiking Web App</h3>
          <img className='project-img' src={wanderlust} alt="" />
          <div className='button-div'>
            <button>GitHub Link</button>
            <button>Video</button>  
            <button onClick={handleClickWebsite} target="_blank">Live Website</button>          
          </div>
        </div>
        {/* <div className='project-card'>
          <h3>React Final Project</h3>
          <img className='project-img' src={wanderlust} alt="" />
          <div className='button-div'>
            <button>GitHub Link</button>
            <button>Video</button>  
            <button onClick={handleClickWebsite} target="_blank">Live Website</button>          
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default ProjectsSection