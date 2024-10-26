import React from 'react'
import BannerImage from "../assets/2blackbean.jpg"
const Contact = () => {
  return (
    <div className='contact'>

        <div className='leftSide' style={{backgroundImage:`url(${BannerImage})` }} ></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
        <form id="contact-form">
            <label htmlFor='name'>Full Name</label>
            <input name='name' placeholder='Enter full Name... ' type='text'/>
            <label htmlFor='email'>Email</label>
            <input name='mail' placeholder='Enter an email ' type='email'/>
            <label htmlFor='name'>Full Name</label>
            <textarea name='message' placeholder='Enter your message ' ></textarea>
        <button type='submit'> Send message </button>
        </form>
        </div>

    </div>
  )
}

export default Contact