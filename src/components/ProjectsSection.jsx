
import React from 'react'
import wanderlust from './images/wanderlust.png'
import ossira from './images/ossira.png'


function ProjectsSection() {

  const handleClickWebsite = (num) => {
    if (num === 1) {
      window.open("https://foundations26-capstone-project.herokuapp.com/"); 
    }
    if (num === 2) {
      window.open("https://ossira.herokuapp.com/"); 
    }
    
  };

  const handleClickVideo= (num) => {
    if (num === 1) {
      window.open("https://youtu.be/WjzjiHF6Uas");      
    }

    if (num === 2) {
      window.open("https://youtu.be/o2NQC87WpaU");      
    }

  };

  const handleClickGit = (num) => {
    if (num === 1) {
    window.open("https://github.com/tefi-sosa/Foundations-FinalProject");      
    }

    if (num === 2) {
      window.open("https://github.com/tefi-sosa/OSSIRA"); 
    }
  };

  return (
    <div className='project'>
      <h1>Projects</h1>
      <div className='project-container'>
        <div className='project-card'>
          <h3>Wanderlust</h3>
          <img className='project-img' src={wanderlust} alt="" />
          <div className='button-div'>
            <button onClick={() => handleClickGit(1)}>GitHub Link</button>
            <button onClick={() => handleClickVideo(1)}>Video</button>  
            <button onClick={() => handleClickWebsite(1)} target="_blank">Live Website</button>          
          </div>
        </div>
        <div className='project-card'>
          <h3>Ossira</h3>
          <img className='project-img' src={ossira} alt="" />
          <div className='button-div'>
            <button onClick={() => handleClickGit(2)}>GitHub Link</button>
            <button onClick={() => handleClickVideo(2)}>Video</button>  
            <button onClick={() => handleClickWebsite(2)} target="_blank">Live Website</button>          
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection