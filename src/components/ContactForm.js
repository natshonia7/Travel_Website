import '../components/ContactFormStyles.css'

import React from 'react'

function ContactForm() {
  return (
      <div className="from-container">
        <h1>Send a messaged to us!</h1>
        <form>
            <input placeholder='Name' />
            <input placeholder='Email' />
            <input placeholder='Subject' />
            <textarea placeholder='Message' rows="10"></textarea>
            <button>Send Message</button>
        </form>
      </div>
    )
}

export default ContactForm