import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './about.css';

export default class About extends React.Component {
  render() {
    return (
      <section id="about_me">
        <Container className="text-center">
          <h2>About me</h2>
          <Row>
            <Col xs="4">
              <img alt="Profile image" src="https://github.com/savijoki.png?size=150" className="rounded-circle"/>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
