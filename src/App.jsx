import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Proggrames from './Components/programes/programes'
import Heading from './Components/Heading/Heading'

const App = () => {
  return(
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Heading title='Our Program' mainTitle='What We Offer'/>
        <Proggrames />
      </div>

    </div>
  )
}


export default App