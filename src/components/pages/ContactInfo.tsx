import React from 'react'
import './ContactInfo.css'

function ContactInfo() {
  return (
    <div className='contactInfo-container'>
      <h1>Let's connect!!!</h1>
      <form>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
        />
        <br/>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
        />
        <br/>
        <label htmlFor='message' className='messageLabel'>Message</label>
        <textarea
          rows="10"
          cols="30"
          id="message"
        ></textarea>
        <br/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default ContactInfo