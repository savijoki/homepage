import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Header from './Header/header';
import Landing from './Landing/landing';
import Intro from './Intro/intro';
import Footer from './Footer/footer';
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
        <Intro/>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
