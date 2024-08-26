import { useState } from 'react'
import './Contact.css'

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleMessage = () => {
    setName(name)
    setEmail(email)
    setMessage(message)

    // alert("Message Sent")
    // console.log(name, email, message)

    // const viewerMessage = encodeURIComponent(message)
    // const whatsappURL =  `https://wa.me/9324466165?text=${message}`
    const whatsappURL =  `https://wa.me/9324466165`
    window.open(whatsappURL, '_blank')


    // setName('')
    // setEmail('')
    // setMessage('')
  }


  return (
    <div className="contact">
      <h1 className="contact-title">Contact Me</h1>
      <h1 className="small-contact-title">Contact Me</h1>
      <form
        className="contact-form"
      >
        <div className="form-title">Let's connect on WhatsApp</div>
        {/* <div className="first">
          <div className="display-form">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" />
          </div>
          <div className="display-form">
            <label htmlFor="email">Email ID</label>
            <input type="email" name='email' />
          </div>
        </div>
        <div className="third">
          <div className="display-form">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id=""
              row="8"
            ></textarea>
          </div>
        </div> */}
        <button className="submit-btn" onClick={handleMessage}>Go To WhatsApp</button>
      </form>
    </div>
  )
}

export default Contact
