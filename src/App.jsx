import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Proggrames from './Components/programes/programes'
import Heading from './Components/Heading/Heading'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Textimonials from './Components/Textimonials/Textimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return(
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Heading title='Our Program' mainTitle='What We Offer'/>
        <Proggrames />
        <About />
        <Heading title='Gallery' mainTitle='Campus Photos'/>
        <Campus />
        <Heading title='TEXTIMONIALS' mainTitle='What Students Says?'/>
        <Textimonials />
        <Heading title='Contact Us' mainTitle='Get in Tauch'/>
        <Contact/>
        <Footer/>
      </div>

    </div>
  )
}


export default App