import React from 'react';
import arrowDown from '../images/arrow-down.png';
import './landing.css';
import ScrollIntoView from 'react-scroll-into-view';

export default class Landing extends React.Component {
  render() {
    return (
      <section id="landing" className="valign-wrapper">
        <div>
          <h1 className="display-3 text-white">Portfolio</h1>
          <h5 className="text-white text-center animated fadeIn">By Aleksi Savijoki</h5>
        </div>
        <div className="arrow-container animated fadeInDownBig">
          <ScrollIntoView selector="#intro">
            <img src={arrowDown} alt="Next section"/>
          </ScrollIntoView>
        </div>
      </section>
    );
  }
}