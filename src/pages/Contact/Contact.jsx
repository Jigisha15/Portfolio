import './Contact.css'

const Contact = () => {
  const handleMessage = () => {
    const whatsappURL = `https://wa.me/9324466165?text=Hi!`
    window.open(whatsappURL, '_blank')
  }

  return (
    <div className="contact">
      <h1 className="contact-title">Contact Me</h1>
      <h1 className="small-contact-title">Contact Me</h1>
      <form className="contact-form">
        <div className="form-title">Let's connect on WhatsApp</div>
        <button
          className="submit-btn"
          onClick={handleMessage}
        >
          Let's Connect !
        </button>
      </form>
    </div>
  )
}

export default Contact
