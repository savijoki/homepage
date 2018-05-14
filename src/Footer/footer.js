import React from 'react';
import { Container } from 'reactstrap';
import './footer.css';

export default class Footer extends React.Component {

  render() {
    return (
      <section id="footer" className="footer">
        <Container>
          <div className="social-links">
            <a href="https://github.com/savijoki" className="logo opacity-hover">
              <i className="fa fa-github fa-2x" />
            </a>
            <a href="https://www.linkedin.com/in/aleksi-savijoki-825a4bb0" className="logo opacity-hover">
              <i className="fa fa-linkedin fa-2x"/>
            </a>
          </div>
        </Container>
      </section>
    );
  }
}