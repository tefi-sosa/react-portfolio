import picture from './images/drone2.jpg'

import React from 'react'

function About() {
  return (
    <div className='about' id='about'>
      <div className='img-container'>
        <img src={picture} alt=""></img>
      </div>
      <div class="input-wrapper">
      <input aria-label="Ask us anything"/>
      <span class="placeholder"></span>
      </div>
      <h1>Hi! I'm Estefania Sosa!</h1>
    </div>
  )
}

export default About