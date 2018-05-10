import React from 'react';
import './welcome.css';
// import { Container, Link } from 'reactstrap';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="hero" className="valign-wrapper">
        <h1 className="display-1 text-white">Welcome!</h1>
      </section>
    );
  }
}