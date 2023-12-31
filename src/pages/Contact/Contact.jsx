import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

import { SlArrowUp } from 'react-icons/sl'

import './Contact.css'

const Contact = () => {
  // for scroll to top button
  const handleTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  // for email
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ien3edf',
        'template_t14wsxu',
        form.current,
        'ZFF2ensoiVlBKbQoc'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('message sent')
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <div className="contact">
      <div className="contact-text">
        <h1>I'd love to hear from you . . .</h1>
      </div>

      <div className="wrap">
        <div className="contact-center"></div>
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="row">
            <div className="input-group">
              <input
                type="text"
                id="name"
                name="user_name"
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-group">
              <input
                type="number"
                id="contact"
                name="user_contact"
                required
              />
              <label htmlFor="contact">Contact</label>
            </div>
          </div>
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="user_email"
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-group">
            <textarea
              rows="8"
              id="message"
              name="user_message"
              required
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button
            type="submit"
            value="Send"
          >
            Submit
          </button>
        </form>
      </div>
      <button
        className="up"
        onClick={handleTop}
      >
        <SlArrowUp />
      </button>

      <p className="bottom">
        <span className="bottom1">Email : jigishaghanekar01@gmail.com</span>
        <span className="bottom2">
          <span className="bottom2">Contact : 9324466165</span>
        </span>
      </p>
    </div>
  )
}

export default Contact
