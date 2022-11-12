import React from 'react'
import "./Projects.css"
import VSimg from "../Assets/vsroom.png"

const Projects = () => {
  return (
    <>
    <div className='container'>
      <div className='div-transform'>
        <div className='card card-1'>
        <a style={{padding: "0px"}} target="_blank" href='https://dry-spire-28519.herokuapp.com/' ><u><h1>Virtual Room</h1></u></a>
          <p>
            It helps users to watch youtube videos on sync.
            I used socket.io with js to build this web app.
            Users can even interact with the help of buildin chat feature.
            Users can change the default video by submitting the video id of any youtube video
          </p>
          <h4>JS, EJS, Socket.io, Nodejs, Expressjs, CSS</h4>
        </div>
        <div className='card card-2'>
          <a target="_blank" href='https://virtualstudyroom.tech/'><u><h1>Virtual Study Room</h1></u></a>
          <p>
            It helps users to study with their friends collaboratively without any distractions
            There is a todolist, chat feature, pomodoro music (helps to concentrate). We won 2nd Overall, best use of twilio and best monitization project at OneHacksII
          </p>
          <h4>Firebase, Svelete, Bulma CSS</h4>
        </div>
        <div className='card card-3'>
          <a href='https://github.com/Nicholas-Sidharta12365/garudahack-2022'><u><h1>PsycConnect</h1></u></a>
          <p>
          PsycConnect connects users from rural areas with the doctors online via video chat Our team won the most creative use of twilio at GarudaHacks 3.0. I worked on the backend.
          </p>
          <h4>ReactJs, Nodejs, Expressjs, Twilio</h4>
        </div>
      </div>
    </div>
    </>
  )
}

export default Projects