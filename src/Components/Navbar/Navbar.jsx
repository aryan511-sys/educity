import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='container'>
      <img src="https://greatstack.in/assets/logo-DUdXW4nF.png" alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
