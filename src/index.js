import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing/landing';
import About from './About/about';
import Work from './Work/work';
import Hobbies from './Hobbies/hobbies';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ReactGA from 'react-ga';
import registerServiceWorker from './registerServiceWorker';


class App extends Component {
  constructor() {
    super();

    // Initialize Google Analytics
    ReactGA.initialize('UA-118994424-1');
    ReactGA.pageview(window.location.pathname);
  };
  
  render() {
    return (
      <div className="App">
        <Landing/>
        <About/>
        <Work/>
        <Hobbies/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
