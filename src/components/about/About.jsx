import React from 'react';
import './About.css';
import about_pic from '../../assets/about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={about_pic} alt="about-pic" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward />
              <h5>Experience</h5>
              <small>3+ working experince</small>
            </article>
            <article className="about-card">
              <FiUsers />
              <h5>Experience</h5>
              <small>3+ working experince</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary />
              <h5>Experience</h5>
              <small>3+ working experince</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur vero magnam consequuntur quaerat eius earum dolores
            dicta repellat modi fugiat perspiciatis molestias non molestiae,
            laudantium tempore harum sunt omnis placeat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
