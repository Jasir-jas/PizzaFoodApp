import React from 'react'
import Navbar from '../components/Navbar'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div>
      <Navbar />
      <div className='contact'>
        <div className='leftSide' style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
        <div className='rightSide'>
          <h1>Contact Us</h1>

          <form action="" method='POST' id='contact-form'>
            <label htmlFor="name">Full Name</label>
            <input type="text" placeholder='Enter Your Name' name='name' />

            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter Your Email' name='email' />

            <label htmlFor="message">Message</label>
            <textarea name="message" id="" cols="6" rows="6" placeholder='Something...' required></textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div> 
      
    </div>
  )
}

export default Contact
