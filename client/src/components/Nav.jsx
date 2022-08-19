import React from 'react'
import hand from "../Assets/hand.gif"

const Nav = () => {
  return (
    <div className='Header'>
        <h1>Welcome ! 
            <img src={hand} alt="Hi" />
        </h1>
    </div>
  )
}

export default Nav