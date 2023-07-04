import React from 'react'

import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-text">
        <h1>I'd love to hear from you . . .</h1>
      </div>
      {/* <div className="wrap">
        <div className="contact-one divs">
          Wanna Collaborate? <br />
          <button className="text">Mail Me!</button>
        </div>
        <div className="contact-two divs">
          Wanna know more about
          <br /> <button className="text">Mail Me!</button>
        </div>
        <div className="contact-three divs">
          Contact Me
          <br />
          <button className="text">Mail Me!</button>
        </div>
      </div> */}

      <div className="wrap">
        <div className="contact-center"></div>
        <form action="">
          <div className="row">
            <div className="input-group">
              <input
                type="text"
                id="name"
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-group">
              <input
                type="number"
                id="contact"
                required
              />
              <label htmlFor="contact">Contact</label>
            </div>
          </div>
          <div className="input-group">
            <input
              type="email"
              id="email"
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-group">
            <textarea
              rows="8"
              id="message"
              required
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
