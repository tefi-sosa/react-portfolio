import picture from './images/drone1.jpg'

import React from 'react'

function About() {
  return (
    <div className='about'>
      <div className='img-container'>
        {/* <img id="drone2" src={picture} alt=""></img> */}
      </div>
      <div className='title-typewrite'>
        <h1 href="" class="typewrite" data-period="2000" data-type='[ "Hi, I am Estefanía Sosa!", "I Love to Develop!" ]'>
           <span class="wrap"> </span>
        </h1>
        <hr />
        <p>Based in Salt Lake City. Software/Web Developer, hiker and traveler. Whenever I'm not working on a project, you'll find me in the outdoors.</p>
      </div>
      <div className='contact-icons'>
        <a href='https://www.linkedin.com/in/estefania-sosa-70b63a1a8/' target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-linkedin fa-xl"></i></a>
        <a href='https://www.instagram.com/tefi.sosa/' target="_blank" rel="noreferrer noopener"><i class="social-icon fa-brands fa-instagram fa-xl"></i></a>
        <a href='#contact'><i class="social-icon fa-solid fa-envelope fa-xl"></i></a>
        <a href='https://github.com/tefi-sosa' target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-github fa-xl"></i></a>
      </div>
    </div>
  )
}

export default About