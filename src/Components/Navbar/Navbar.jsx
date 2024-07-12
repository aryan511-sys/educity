import React , { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

function Navbar() {
    const [sticky , setSticky] = useState(false);
    useEffect( () => {
      window.addEventListener('scroll' , ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    } , [] )

    const [mobileMenu , setMobileMenu] = useState(true);
    const toggleMenu = () => {
      ! mobileMenu ? setMobileMenu(true) : setMobileMenu(false) 
    }


    return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src="https://greatstack.in/assets/logo-DUdXW4nF.png" alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='textimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
      </ul>
      <img className='menu-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABQCAYAAADr/ADSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACOSURBVHgB7d2xEYAwDARBi/57BpMwQwW+YLeFS/WjubfFZ7YVcC2ShIkSJkqYKGGihIkSJkqYKGGihIkSBgAAAAAAAAAAOGQsyprclUUJEyVMlDBRwkQJEyVMlDBRwkQJEyUMAAAAAAAAAABwSOIf18uy7c9dWZQwUcJECRMlTJQwUcJECRMlTJQwUcJEPT/mDD5eCGIPAAAAAElFTkSuQmCC" alt="" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
