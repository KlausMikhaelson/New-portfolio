import React from 'react'
import "./Projects.css"
import VSimg from "../Assets/vsroom.png"

const Projects = () => {
  return (
    <>
    <div>
        <h1 className='project-header'>
            Projects !
        </h1>
        <div className='project-list'>
          <span className='vsroom'>
            <h1>Virtual Study Room</h1>
            <span className='project-img'>
            <img src={VSimg} alt="Virtual Study Room" />
            </span>
            <p>Virtual Study Room helps users <br></br>
            to study collaboratively with <br></br> 
            their friends while
            </p>
          </span>
        </div>
    </div>
    </>
  )
}

export default Projects