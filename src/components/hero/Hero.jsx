import React from 'react'
import "./../hero/hero.scss"

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="img__container">
        <img className="image" src="/profile-pic.jpg" alt="Profile Picture" />
      </div>
      <h2 className='subtitle'>Hi, I'm Tushar</h2>
      <h1 className='title'>FRONT-END <br />WEB DEVELOPER.</h1>
      <p className='desc'>With knowledge in <strong>web development</strong> and <a>design</a>, i offer the best projects resulting in quality work.</p>
      <a className="hero__btn btn" href="#">Reach out</a>
    </div>
  )
}

export default Hero