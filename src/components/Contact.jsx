import React from 'react'
import '../styles.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>obadararoqeeb@gmail.com</h5>
            <a href="mailto:obadararoqeeb@gmail.com" target="_blank">Send a messsage</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>RNATIONS</h5>
            <a href="m.me/profile-name" target="_blank">Send a messsage</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2348141234141</h5>
            <a href="https://api.whatsapp.com/send?phone+2348141234141" target="_blank">Send a messsage</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send A Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact