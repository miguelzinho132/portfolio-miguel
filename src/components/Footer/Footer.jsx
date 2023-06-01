import React from 'react'
import "./Footer.css"
import Curriculo from '../../../src/resources/miguel.pdf'

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='author'>
        <p>Criado por <a href={Curriculo} target="_blank" rel="noopener noreferrer">Miguel Tiago</a> com <i className='far fa-heart'></i></p>
        </div>
        <div className=''>
        <p className='copyright'> <i className='far fa-copyright'></i> 2023 All rights reserved</p>
        </div>
    </div>
    </>
  )
}

export default Footer
