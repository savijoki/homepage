import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/header';
import Welcome from './Welcome/welcome';
import Footer from './Footer/footer';
import { Container } from 'reactstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Welcome/>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
