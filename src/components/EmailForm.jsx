
import React from 'react'

function EmailForm() {
  const email = "estefi.monumental@gmail.com"

  return (
    <div class="container" id='contact'>
  <h1>Let's get in contact!</h1>
  <form target="_blank" action={`https://formsubmit.co/${email}`} method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Full Name" required/>
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
</div>
  )
}

export default EmailForm