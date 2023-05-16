import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/water.jpg'
import Img2 from '../../assets/hike.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img2} alt="Hike" />
          </div>
          <h3>HiKr</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>

        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img1} alt="water" />
          </div>
          <div className="portfolio__item-cta">
          <h3>waterUdoin</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;