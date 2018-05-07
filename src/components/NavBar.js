import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="NavBar">
          <li className="nav-item nav-name">Aleksi Savijoki</li>
          <li className="nav-item nav-last"><a href="#" className="nav-link">Link</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Link 2</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
