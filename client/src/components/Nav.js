import React from 'react'
import hand from "../Assets/hand.gif"
import './Nav.css';


const Nav = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }} className='Header'>
        <h1>Hello <span className='discord-style'>@everyone</span>!</h1>
        <div>
        <img style={{ display: "flex", flex: 1 }} className='hand-image-nav' src={hand} alt="Hi" />
        </div>
    </div>
  )
}


export default Nav