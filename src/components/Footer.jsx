
import React from 'react'

function Footer() {
  return (
    <div id='footer'>
      <div className='contact-icons'>
        <a href='https://www.linkedin.com/in/estefania-sosa-70b63a1a8/' target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-linkedin fa-xl"></i></a>
        <a href='https://www.instagram.com/tefi.sosa/' target="_blank" rel="noreferrer noopener"><i class="social-icon fa-brands fa-instagram fa-xl"></i></a>
        <a href='#contact'><i class="social-icon fa-solid fa-envelope fa-xl"></i></a>
        <a href='https://github.com/tefi-sosa' target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-github fa-xl"></i></a>
      </div>
      <p class="copyright">Copyright © Estefania Sosa Oberlin 2022</p>
    </div>
  )
}

export default Footer