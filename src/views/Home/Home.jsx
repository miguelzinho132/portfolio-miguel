import React from 'react'
import './Home.css'
import gif from '../../../src/images/giphy.gif'
import Curriculo from '../../../src/resources/miguel.pdf'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

function Home() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id='Home' className='home'>
      <div className="home-flex">
        <div className="left-content" data-aos = "fade-down" data-aos-delay= "2000">
          <p>Olá, eu sou o</p>
          <h1>Miguel</h1>
          <h2>E eu sou um <span className="typing"></span></h2>
          <a href={Curriculo} target="_blank" rel="noopener noreferrer">Download Curriculo</a>
        </div>
        <div className="right-content" data-aos = "fade-up" data-aos-delay= "2000">
          <img src={gif} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home

