import React, { useEffect } from 'react'
import TypeWriter from "typewriter-effect"
import "./Hero.css"
import Heroimage from "../Assets/hero.png"


const Hero = () => {
    useEffect(() => {
        setInterval(()=> {
            TypeWriter(true);
        }, 20000)
    })
  return (
    <div className='hero-container'>
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
        <div className='logo-image'>
        <img className='logo' src={Heroimage} alt="logo" />
        </div>
    </div>
  )
}

export default Hero