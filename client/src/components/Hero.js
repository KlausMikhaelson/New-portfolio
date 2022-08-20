import React, { useEffect } from 'react'
import TypeWriter from "typewriter-effect"
import "./Hero.css"


const Hero = () => {
    useEffect(() => {
        setInterval(()=> {
            TypeWriter(true);
        }, 4000)
    })
  return (
    <div>
        <h1 className='intro'>I'm <span className='my-name'><TypeWriter onInit={(TypeWriter)=> {
            TypeWriter
            .typeString("Satyam Singh")
            .pauseFor(1000)
            .deleteAll()
            .typeString("a Full Stack developer")
            .pauseFor(1000)
            .deleteAll()
            .typeString("an Open source Contributor")
            .pauseFor(1000)
            .deleteAll()
            .typeString("a Hackathon enthusiast")
            .pauseFor(1000)
            .start()
        } } />
        </span>
        </h1>
    </div>
  )
}

export default Hero