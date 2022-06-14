import React from 'react';
import './Portfolio.css';
import portfolio_image1 from '../../assets/portfolio1.jpg';
import portfolio_image2 from '../../assets/portfolio2.jpg';
import portfolio_image3 from '../../assets/portfolio3.jpg';
import portfolio_image4 from '../../assets/portfolio4.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={portfolio_image1} alt="image 1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://youtube.com" className="btn">
            Youtube
          </a>
          <a href="" target="_blank" className="btn btn-primary">
            Live Demo
          </a>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={portfolio_image2} alt="image 1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://youtube.com" className="btn">
            Youtube
          </a>
          <a href="" target="_blank" className="btn btn-primary">
            Live Demo
          </a>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={portfolio_image3} alt="image 1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://youtube.com" className="btn">
            Youtube
          </a>
          <a href="" target="_blank" className="btn btn-primary">
            Live Demo
          </a>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={portfolio_image4} alt="image 4" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://youtube.com" className="btn">
            Youtube
          </a>
          <a href="" target="_blank" className="btn btn-primary">
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
