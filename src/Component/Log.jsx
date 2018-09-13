import  React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import './Log.css';

class Log extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Log in page</h1>
      </div>
    );
  }
}
export default Log;