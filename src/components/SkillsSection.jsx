
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
      name: "NodeJs",
      img: "devicon-nodejs-plain"
    },
    {
      name: "Python",
      img: "devicon-python-plain"
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
    <div className='icon-container' id="skills">
      {map}
    </div>
  )
}

export default SkillsSection