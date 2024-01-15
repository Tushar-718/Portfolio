import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Journey from './components/myJourney/Journey'
import Work from './components/work/Work'
import Contact from './components/contactUs/Contact'

const App = () => {
  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Journey/>
      <Work/>
      <Contact/>
    </>
  )
}

export default App