import React from "react";
import "./../hero/hero.scss";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="img__container">
        <img className="image" src="/profile-pic.jpeg" alt="Profile Picture" />
      </div>
      <h2 className="subtitle">Hi, I'm Tushar</h2>
      <h1 className="title">
        REACT NATIVE <br />
        DEVELOPER.
      </h1>
      <p className="desc">
        With expertise in <strong>mobile app development</strong> and <a>React Native</a>, I build
        high-performance applications resulting in quality work.
      </p>
      {/* <a className="hero__btn btn" href="contact">Reach out</a> */}
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className="linkItems hero__btn btn"
      >
        Reach out
      </Link>
    </div>
  );
};

export default Hero;
