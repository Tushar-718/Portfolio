import React from 'react';
import './../work/work.scss';
import projects from './projects';

const Work = () => {
  return (
    <div className="work container section">
      <h2 className="title">What I Have Done...</h2>
      <div className="projects">
      {projects.map((project, index) => (
          <div
            className={`project__card ${index % 2 === 0 ? 'fd' : 'fdr'}`}
            key={project.id}
          >
        <div className="project__img">
          <img src={`./${project.imageSource}.png`} alt={project.title} />
        </div>
        <div className="project__info">
          <h3 className='title'>{project.title}</h3>
          <div className='tech'>
            {project.technologies.map((value, key) => (
              <span className="tech__style" key={key}>{value}</span>
            ))}
          </div>
          <div className="description">
            <p className='desc'>{project.description}</p>
          </div>
          <div className="visitButton">
            <a className="btn" href="">
              Website
            </a>
          </div>
        </div>
      </div>
        ))}
    </div>
    </div>
  );
};

export default Work;
