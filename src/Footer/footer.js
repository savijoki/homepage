import React from 'react';
import './footer.css';
import github from '../images/github.png';
import { Container, Link } from 'reactstrap';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="footer">
        <a href="https://github.com/savijoki" target="_blank">
          <img src={github} />
        </a>
      </div>
    );
  }
}