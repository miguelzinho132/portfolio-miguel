import React from 'react'
import './Contact.css'
import ContactBox from '../../components/ContactBox/ContactBox'

function Contact() {
  return (
    <>
    <div id="Contact" className='contact'>
      <h1>Fale comigo agora</h1>
      <div className="boxes">
        <ContactBox animation="fade-right" class= "fas fa-envelope" name="Email" link="mailto:migueldionisio.08@gmail.com"/>
        <ContactBox animation="fade-up" class= "fab fa-github" name="Github" link="https://github.com/miguelzinho132"/>
      </div>

    </div>
    </>
  )
}

export default Contact
