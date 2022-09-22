import React, { useEffect } from 'react'
import TypeWriter from "typewriter-effect"
import "./Hero.css"
import Heroimage from "../Assets/hero.png"
import hand from "../Assets/hand.gif"

// import { ParallaxHover } from "react-parallax-hover"


const Hero = () => {
    
    
    useEffect(() => {
        setInterval(()=> {
            TypeWriter(true);
        }, 20000)
    })

  return (
    <>
    <div style={{ display: "flex", flexDirection: "row" }} className='Header'>
        <h1>Hello <span className='discord-style'>@everyone</span>!</h1>
        <div>
        <img style={{ display: "flex", flex: 1 }} className='hand-image-nav' src={hand} alt="Hi" />
        </div>
    </div>
    <div className='hero-container'>
        <h1 className='intro text-center m-0'>I'm <span className='my-name'><TypeWriter onInit={(TypeWriter)=> {
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
            .deleteAll()
            .typeString("Satyam Singh")
            .pauseFor(1000)
            .start()
        } } />
        </span>
        </h1>
        <div className='logo-image'>
        <img className='logo' src={Heroimage} alt="logo" />
        </div>

        <div className='card'>
            {/* <ParallaxHover>
                <div className='projects'>
                    <h1>
                        <a href="https://virtualstudyroom.tech/">Link</a>
                    </h1>
                </div>
            </ParallaxHover> */}
        </div>

    </div>
    </>
  )
}

export default Hero