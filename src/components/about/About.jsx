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
          Passionate and results-driven <strong>React Native & Mobile Developer </strong>
          with <strong>3 years</strong> of experience shipping high-performance
          <strong> Android and iOS</strong> apps using <a>React Native, Expo, and TypeScript</a>, as
          well as responsive web applications with <strong>React.js and Next.js</strong>.
        </p>
        <p className="about__desc">
          I have delivered <strong>5+ mobile apps</strong> to the Google Play Store and Apple App
          Store, spanning enterprise B2B workflows, offline-first real-time chat SDKs, and IoT
          integrations with BLE and NFC. I actively leverage an
          <strong> AI-assisted workflow</strong> with <a>Claude Code</a> and MCP integrations to
          accelerate feature delivery, conduct rigorous PR reviews, and debug production systems.
        </p>
        <p className="about__desc">
          I take pride in writing clean, scalable, and maintainable code with robust state
          management and modern UI architecture. Committed to continuous growth and solving
          challenging technical problems, I strive to build seamless, high-impact user experiences.
          🚀
        </p>
        <hr className="about__hr" />
        <div className="about__skillTool">
          <div className="skill__container">
            <h3 className="about__subtitle">SKILLS</h3>
            <div className="about__ul-container">
              <ul className="about__ul">
                <li className="about__list">REACT NATIVE & EXPO</li>
                <li className="about__list">REACT JS & NEXT JS</li>
                <li className="about__list">TYPESCRIPT & JAVASCRIPT</li>
                <li className="about__list">REDUX TOOLKIT & TANSTACK QUERY</li>
                <li className="about__list">WEBSOCKET & REST APIS</li>
                <li className="about__list">BLE & NFC INTEGRATION</li>
                <li className="about__list">TAILWIND CSS & SCSS</li>
              </ul>
            </div>
          </div>
          <div className="skill__container">
            <h3 className="about__subtitle">TOOLS & AI</h3>
            <div className="about__ul-container">
              <ul className="about__ul">
                <li className="about__list">CLAUDE CODE & MCP</li>
                <li className="about__list">GIT & GITHUB</li>
                <li className="about__list">XCODE & ANDROID STUDIO</li>
                <li className="about__list">EAS BUILD & OTA UPDATES</li>
                <li className="about__list">FIREBASE & WATERMELONDB</li>
                <li className="about__list">POSTMAN & JIRA</li>
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
