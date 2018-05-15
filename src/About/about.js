import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './about.css';

export default class About extends React.Component {
  
  constructor(props) {
    // Calculate age dynamically
    super(props);
    var today = new Date();
    var birthDate = new Date(1992, 7, 1);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    this.state = {
      age: age
    }
  }
  render() {
    return (
      <section id="about_me">
        <Container >
          <div className="text-center">
            <h2>About me</h2>
          </div>
          <Row className="mt32 mb32">
            <Col md={{ size: 7, offset: 2, order: 1}} xs={{order: 2}} className="about">
              <h4>Full-Stack web engineer</h4>
              <p>
                I'm a {this.state.age}-year-old with a passion for programming. I enjoy creating modern web designs.
                For the past few years I've developed extensions for Odoo, Magento and Joomla. I'm experienced with Django-framework.
              </p>
              <p>
                Right now I'm looking forward to learning modern JavaScript-frameworks such as ReactJS,
                Angular 2 / Angularjs, Aurelia, vue.js... These have been on my TODO-list for a long time and now
                since I'm graduating from TUT, I actually have time to learn these. This website was built with ReactJS.
              </p>
              <p>
                <b>Experienced with:</b><br/> Python, HTML, CSS3, Sass, Less, JavaScript, jQuery, PHP
              </p>
              <a href="mailto:aleksi.savijoki@gmail.com" className="contact btn btn-danger mt16">Contact me</a>
            </Col>
            <Col md={{ size: 3, order: 2}} xs={{order: 1}} className="profile-image">
              <img alt="Profile" src="https://github.com/savijoki.png?size=200" className="rounded-circle"/>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
