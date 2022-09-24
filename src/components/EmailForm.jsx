import picture from './images/drone2.jpg'
import React from 'react'
import Footer from './Footer'

function EmailForm() {
  const email = "estefi.monumental@gmail.com"

  return (
    <div className="container" id='contact1'>
      <div className='img-container'>
        {/* <img id="drone1" src={picture} alt=""></img> */}
      </div>
      <div className='title'>
        <h1>Let's get in contact!</h1>
      </div>
      <form target="_blank" action={`https://formsubmit.co/${email}`} method="POST">
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <input type="text" name="name" className="form-control" placeholder="Full Name" required/>
            </div>
            <div class="col">
              <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
        </div>
        <button type="submit" className="btn btn-lg btn-light btn-block">Submit Form</button>
      </form>
    </div>
  )
}

export default EmailForm