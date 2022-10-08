import React from 'react'
import Reactimg from '../Assets/react.png'
import Nodejs from "../Assets/nodejs.png"
import Js from "../Assets/js.png"
import "./Language.css"
import Java from "../Assets/java.png"
import Python from "../Assets/python.png"
import Tensorflow from "../Assets/tensorflow.png"
import Mongo from "../Assets/mongo.png"
import Firebase from "../Assets/firebase.png"


const Language = () => {
  return (
    <>
    <h1 className='header-lang'>Proficiency...</h1>
      <div className='lang'>
        <div className='react-lang'>
          <div className='lang-name'>
          <img src={Reactimg} alt="React" />
          </div>
          <div className='progress'>
            <span className='react'></span>
          </div>
        </div>
        <div className='Node-lang'>
          <div className='lang-name'>
          <img src={Nodejs} alt="NodeJs" />
          </div>
          <div className='progress'>
            <span className='Node'></span>
          </div>
        </div>
        <div className='Node-lang'>
          <div className='lang-name'>
          <img src={Js} alt="Js" />
          </div>
          <div className='progress'>
            <span className='js'></span>
          </div>
        </div>
        <div className='Node-lang'>
          <div className='lang-name'>
          <img src={Java} alt="Java" />
          </div>
          <div className='progress'>
            <span className='java'></span>
          </div>
        </div>
        <div className='Node-lang'>
          <div className='lang-name'>
          <img src={Python} alt="Python" />
          </div>
          <div className='progress'>
            <span className='Python'></span>
          </div>
        </div>
        <div className='Node-lang'>
          <div className='lang-name'>
          <img src={Tensorflow} alt="Tensorflow" />
          </div>
          <div className='progress'>
            <span className='Tensorflow'></span>
          </div>
        </div>
        <div className='Node-lang'>
          <div className='lang-name'>
          <img src={Mongo} alt="MongoDB" />
          </div>
          <div className='progress'>
            <span className='MongoDb'></span>
          </div>
        </div>
        <div className='Node-lang'>
          <div className='lang-name'>
          <img src={Firebase} alt="Firebase" />
          </div>
          <div className='progress'>
            <span className='Firebase'></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Language