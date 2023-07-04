import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

import './Contact.css'

const Contact = () => {
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
    </div>
  )
}

export default Contact
