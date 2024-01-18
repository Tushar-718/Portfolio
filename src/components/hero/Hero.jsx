import React from 'react'
import "./../hero/hero.scss"
import { Link } from "react-scroll"

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="img__container">
        <img className="image" src="/profile-pic.jpg" alt="Profile Picture" />
      </div>
      <h2 className='subtitle'>Hi, I'm Tushar</h2>
      <h1 className='title'>FRONT-END <br />WEB DEVELOPER.</h1>
      <p className='desc'>With knowledge in <strong>web development</strong> and <a>design</a>, i offer the best projects resulting in quality work.</p>
      {/* <a className="hero__btn btn" href="contact">Reach out</a> */}
      <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="linkItems hero__btn btn">Reach out</Link>
    </div>
  )
}

export default Hero