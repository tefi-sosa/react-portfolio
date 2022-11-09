
import React from 'react'

function SkillsSection() {

  const skillIcons = [
    {
      name: "React",
      img: "devicon-react-original"
    },
    {
      name: "Javascript",
      img: "devicon-javascript-plain"
    },
    {
      name: "HTML",
      img:  "devicon-html5-plain"
    },
    {
      name: "CSS",
      img: "devicon-css3-plain"
    },
    {
      name: "Bootstrap",
      img: "devicon-bootstrap-plain"
    },
    {
      name: "Redux",
      img: "devicon-redux-original"
    },
    {
      name: "NodeJs",
      img: "devicon-nodejs-plain"
    },
    {
      name: "Python",
      img: "devicon-python-plain"
    },
    {
      name: "Sequelize",
      img: "devicon-sequelize-plain"
    },
    {
      name: "PostgreSQL",
      img: "devicon-postgresql-plain"
    },
    {
      name: "Heroku",
      img: "devicon-heroku-original"
    },
    {
      name: "Firebase",
      img: "devicon-firebase-plain"
    },
    {
      name: "MongoDB",
      img: "devicon-mongodb-plain"
    },
    {
      name: "MySQL",
      img: "devicon-mysql-plain"
    },
    {
      name: "Figma",
      img: "devicon-figma-plain"
    },
    {
      name: "Jest",
      img: "devicon-jest-plain"
    },
    {
      name: "Git/GitHub",
      img: "devicon-git-plain"
    },
  ]

  const map = Object.values(skillIcons).map((icon, index) => {   
    return <div className='icons'><i className={icon.img}></i><h4>{icon.name}</h4></div>
  })

  return (
    <div  id="skills">
      <h1>Skills</h1>
      <div className='icon-container'>
       {map}                
      </div>
    </div>
  )
}

export default SkillsSection