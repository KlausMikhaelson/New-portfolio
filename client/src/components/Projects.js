import React from 'react'
import "./Projects.css"
// import VSimg from "../Assets/vsroom.png"

const Projects = () => {
  return (
    <>
    <h1 className='header' style={{textAlign: "center", paddingTop: "40px", color:"#ffffff"}}>Some of the projects that I am proud of</h1>
    <div className='container'>
      <div className='div-transform'>
        <div className='card card-1'>
        <a rel="noreferrer" style={{padding: "0px"}} target="_blank" href='https://dry-spire-28519.herokuapp.com/' ><u><h1>Virtual Room</h1></u></a>
          <p>
            It helps users to watch youtube videos on sync.
            I used socket.io with js to build this web app.
            Users can even interact with the help of buildin chat feature.
            Users can change the default video by submitting the video id of any youtube video
          </p>
          <h4>JS, EJS, Socket.io, Nodejs, Expressjs, CSS</h4>
        </div>
        <div className='card card-2'>
          <a rel="noreferrer" target="_blank" href='https://virtualstudyroom.tech/'><u><h1>Virtual Study Room</h1></u></a>
          <p>
            It helps users to study with their friends collaboratively without any distractions
            There is a todolist, chat feature, pomodoro music (helps to concentrate). We won 2nd Overall, best use of twilio and best monitization project at OneHacksII
          </p>
          <h4>Firebase, Svelete, Bulma CSS</h4>
        </div>
        <div className='card card-3'>
          <a rel="noreferrer" href='https://github.com/Nicholas-Sidharta12365/garudahack-2022'><u><h1>PsycConnect</h1></u></a>
          <p>
          PsycConnect connects users from rural areas with the doctors online via video chat Our team won the most creative use of twilio at GarudaHacks 3.0. I worked on the backend.
          </p>
          <h4>ReactJs, Nodejs, Expressjs, Twilio</h4>
        </div>
        <div className='card card-4'>
          <a rel="noreferrer" target="_blank" href='https://github.com/kartikpatel0170/SpyPooch'><u><h1>SpyPooch</h1></u></a>
          <p>
            SpyPooch helps users to keep spy on their pets so that they never loose them again!, it scans the gate of the user with the help of tensorflowjs and starts recording as soon as the dog/cat comes in the frame and sends a text alert to the user using twilio  
          </p>
          <h4>ReactJS, Nodejs, Expressjs, tensorflowjs</h4>
        </div>
      </div>
    </div>
    </>
  )
}

export default Projects