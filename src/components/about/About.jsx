import React from "react";
import "./../about/about.scss";
import development from "../../../src/assets/lottie/development.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <div id="about" className="container section">
      <div className="about__content">
        <h2 className="about__title">Who Am I?</h2>
        <p className="about__desc">
          Passionate and results-driven <strong>Software Development Engineer (SDE-1) </strong>
          with 1.5 years of experience in mobile and web application
          development. Currently working as an <a>App Developer</a>, I specialize in
          building high-performance, cross-platform applications using React
          Native, JavaScript/TypeScript, Redux, Next JS, and modern UI frameworks.
        </p>
        <p className="about__desc">
          Beyond coding, I am committed to continuous learning, staying updated
          with industry trends, and refining my problem-solving abilities. My
          goal is to evolve into a well-rounded engineer, contributing to
          innovative solutions and pushing the boundaries of mobile development.
        </p>
        <p className="about__desc">
          I take pride in writing clean, maintainable code and ensuring every
          product I work on meets the highest standards of quality and
          usability. As I grow in my career, I am eager to take on new
          challenges, explore emerging technologies, and make a meaningful
          impact in the world of app development. 🚀
        </p>
        <hr className="about__hr" />
        <div className="about__skillTool">
          <div className="skill__container">
            <h3 className="about__subtitle">SKILLS</h3>
            <div className="about__ul-container">
              <ul className="about__ul">
                <li className="about__list">REACT JS</li>
                <li className="about__list">NEXT JS</li>
                <li className="about__list">REACT NATIVE</li>
                <li className="about__list">SQL</li>
                <li className="about__list">RESPONSIVE WEB DESIGN</li>
                <li className="about__list">TAILWIND CSS</li>
              </ul>
            </div>
          </div>
          <div className="skill__container">
            <h3 className="about__subtitle">TOOLS</h3>
            <div className="about__ul-container">
              <ul className="about__ul">
                <li className="about__list">GIT</li>
                <li className="about__list">JIRA</li>
                <li className="about__list">BITBUCKET</li>
                <li className="about__list">SVN</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="about__img">
        <Lottie animationData={development} />
      </div>
    </div>
  );
};

export default About;
