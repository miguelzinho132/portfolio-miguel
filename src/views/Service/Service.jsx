import React from 'react'
import './Service.css'
import ServiceBox from '../../components/ServiceBox/ServiceBox'

function Service() {
  return (
    <>
    <div id="Services" className='services'>
      <h1>Meus serviços</h1>
      <div className="boxes">
        <ServiceBox animation = "fade-up" icon = "fas fa-globe" heading = "Desenvolvimento Web" text = "Eu ofereço um vasto conhecimento em linguagens de programação web, como: CSS, JSX, HTML." />
        <ServiceBox animation = "fade-up" icon = "fas fa-code" heading = "Desenvolvimento de software" text = "Conhecimento em programação para aplicativos, tanto mobile quanto para computador."/>
        <ServiceBox animation = "fade-up" icon = "fas fa-bookmark" heading = "Design" text = "Conhecimento em Adobe Photoshop para edições simples de imagem" />
        <ServiceBox animation = "fade-up" icon = "fa-solid fa-music" heading = "Musica" text = "Sei tocar sax alto intermediariamente. " />
      </div>
    </div>
    </>
  )
}

export default Service
