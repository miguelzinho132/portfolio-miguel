import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/wpp image.jpg'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>Sobre mim</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={img9} alt="" />
        </div>
        <div  className="right-content">
        <h2>Olá, eu sou o Miguel</h2>
        <p>Olá, meu nome é Miguel Tiago, sou um desenvolvedor de software, estudante de música e espanhol, pretendo trabalhar como biólogo no futuro. </p>
        <a href="https://www.linkedin.com/mwlite/in/miguel-dionisio-33a391278" target="_blank" rel="noopener noreferrer">Este sou eu</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
