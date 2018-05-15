import React from 'react';
import arrowDown from '../images/arrow-down.png';
import './landing.css';
import ScrollIntoView from 'react-scroll-into-view';

export default class Landing extends React.Component {
  render() {
    return (
      <section id="landing">
        <div className="social-links">
          <a href="https://github.com/savijoki" className="logo opacity-hover">
            <i className="fa fa-github fa-2x" />
          </a>
          <a href="https://www.linkedin.com/in/aleksi-savijoki-825a4bb0" className="logo opacity-hover">
            <i className="fa fa-linkedin fa-2x"/>
          </a>
        </div>
        <div className="valign-wrapper">
          <div>
            <h1 className="display-3 text-white">Portfolio</h1>
            <h5 className="text-white text-center animated fadeIn">By Aleksi Savijoki</h5>
          </div>
          <div className="arrow-container animated fadeInDownBig">
            <ScrollIntoView selector="#about_me">
              <img src={arrowDown} alt="Next section"/>
            </ScrollIntoView>
          </div>
        </div>
      </section>
    );
  }
}