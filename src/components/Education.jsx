import React, {Fragment} from "react";
import resume from '../resume/Estefania-Sosa-Resume.pdf'

const Education = () => {
  return (
    <Fragment>
      <h1>Education</h1>      
    <div className="education-row">
      <div className="education-section">
        <div className="education-card">
          <h3>Devmountain</h3>
            <hr></hr>
            <h4>
              <i className="certification">Certificate in Web Development</i>
            </h4>
        </div>
        <div className="education-card">
          <h3>Brigham Young University - Idaho</h3>             
          <hr></hr>
          <h4>
            <i className="certification">BS in Exercise Physiology </i>
          </h4>
      
        </div>
      </div>
      <div className="resume-card">
        <h2>Resume</h2>
        <a className="resume-icon" href={resume} download><i class="fa-regular fa-file"></i>Click to download</a>
      </div>
    </div>
  </Fragment>  
  );
};

export default Education;
