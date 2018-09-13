import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Log from './Component/Log';
// import Sign from './Component/Sign';
import Home from './Component/Home';
import Forgiveness from './Component/Forgiveness';
import Screens from './Component/Screens';
import CustomNav from './Component/CustomNav';
import Footer from './Component/footer';
import Contact from './Component/Contact';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <CustomNav />
          <Route exact path="/" component={Home} />
          <Route path="/Log" component={Log} />
          <Route path="/contact" component={Contact} />
          <Route path="/home" component={Home} />
          <Route path="/forgiveness" component={Forgiveness} />
          <Route path="/screens" component={Screens} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
