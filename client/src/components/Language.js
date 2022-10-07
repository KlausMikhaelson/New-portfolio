import React from 'react'
import Reactimg from '../Assets/react.png'
import Nodejs from "../Assets/nodejs.png"
import Js from "../Assets/js.png"
import "./Language.css"


const Language = () => {
  return (
    <>
      <div className='lang'>
          <img src={Reactimg} alt="React" />
          <img src={Nodejs} alt="NodeJs" />
          <img src={Js} alt="Js" />
      </div>
    </>
  )
}

export default Language