import React from 'react'
import Reactimg from '../Assets/react.png'
import Nodejs from "../Assets/nodejs.png"
import Js from "../Assets/js.png"
import "./Language.css"
import Java from "../Assets/java.png"


const Language = () => {
  return (
    <>
      <div className='lang'>
        <div className='react-lang'>
          <img src={Reactimg} alt="React" />
          <div className='progress'>
        <span className='react'></span>
          </div>
        </div>
          <img src={Nodejs} alt="NodeJs" />
          <img src={Js} alt="Js" />
          <img src={Java} alt="Java" />
      </div>
    </>
  )
}

export default Language