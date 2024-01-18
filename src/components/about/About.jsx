import React from "react";
import "./../about/about.scss";
import development from "../../../src/assets/lottie/development.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <div id="about" className="container section">
      <div className="about__content">
        <h2 className="about__title">Who Am I?</h2>
        <p className="about__desc">Committed and goal-oriented <a>Information technology</a> graduate looking to pursue a career in the Front end developer domain. Possess excellent knowledge web technologies. Ability to learn things quickly and capable of working in a fast-paced and team-driven environment.</p>
        <p className="about__desc">
          My journey as a <strong>web developer</strong> is fueled by a desire
          to continuously learn, innovate, and elevate my craft. While I've
          accomplished significant feats in just a year, my sights are set on
          becoming a recognized expert in the sector. I am committed to staying
          ahead of trends, refining my skills, and contributing to the
          advancement of <strong>web development</strong>.
        </p>
        <hr className="about__hr" />
        <div className="about__skillTool">
        <div className="skill__container">
        <h3 className="about__subtitle">SKILLS</h3>
        <div className="about__ul-container">
          <ul className="about__ul">
            <li className="about__list">HTML5</li>
            <li className="about__list">CSS3</li>
            <li className="about__list">JAVASCRIPT (ES6+)</li>
            <li className="about__list">REACT JS</li>
            <li className="about__list">SQL</li>
            <li className="about__list">RESPONSIVE DESIGN</li>
            <li className="about__list">BOOTSTRAP</li>
            <li className="about__list">TAILWIND CSS</li>
            <li className="about__list">SASS</li>
          </ul>
        </div>
        </div>
        <div className="skill__container">
          <h3 className="about__subtitle">TOOLS</h3>
        <div className="about__ul-container">
          <ul className="about__ul">
            <li className="about__list">GIT</li>
            <li className="about__list">SVN</li>
            <li className="about__list">VSCODE</li>
            <li className="about__list">JIRA</li>
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
