import  React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import swal from 'sweetalert';
import './Sign.css';

class Sign extends Component{
  constructor(props){
    super(props);
    this.state={
      firstName:' ',
      sureName:'  ',
      userName:' ',
      Email:'',
      phoneNumber:'',
      password:'',
      confirmPassword:'',
      age:'',
      type:''
    }
    this.handleDate = this.handleDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleDate = ((e) =>{
    e.preventDefault();
    this.setState({
      [e.target.name]:e.target.value,
    })
    
  })
  onSubmit = (()=>{
    let data = this.state;
    if(data.firstName == 0 || data.sureName  == 0 || data.userName == 0 || data.Email == 0 )
      {swal("OOPS!", "Please input your data!", "error");}
    else 
    {     
      console.log(data);
      swal("Congratulations!", "Welcome " + this.state.firstName + this.state.sureName,  "success");
    }
  
  })
  
  render() {
    
    return (
      <div>
        <div className='signUp'>
        <div className='shadow'>
            <div className="container">
            <div className="col-lg-12 col-md-12 sign">
                <h2>Sign Up</h2>
            <form  ref="form">

              <div className="form-group">
                    <input type="text" id='first' onChange={this.handleDate} value={this.state.name} className="form-control" name='firstName' autoComplete="given-name"
                       placeholder="First Name"/>
                    <h4></h4>
              </div>
            
              <div className="form-group">
                <input type="text" id='second'    onChange={this.handleDate} value={this.state.name} className="form-control" name='sureName' autoComplete=" family-name "
                    placeholder="Sure Name"/>
                <h4></h4>
              </div>

              <div className="form-group">
                <input type="text" id='username'    onChange={this.handleDate} value={this.state.name} className="form-control" name='userName' autoComplete="userName"
                    placeholder="User Name"/>
                <h4></h4>
              </div>

              <div className="form-group">
                <input type="text" id='email'  onChange={this.handleDate} value={this.state.name} className="form-control" name='Email' autoComplete="e-mail"
                    placeholder="Email"/>
                <h4></h4>
              </div>

              <div className="form-group">
                <input type="text" id='phone'  onChange={this.handleDate} value={this.state.name} className="form-control" autoComplete="current-password"
                    placeholder="phone" name="phoneNumber"/>
                <h4></h4>
              </div>

              <div className="form-group">
                <input type="password" id='password'  onChange={this.handleDate} value={this.state.name} className="form-control" autoComplete="current-password"
                    placeholder="password" name="Password"/>
                <h4></h4>
              </div>

              <div className="form-group">
                <input type="password" id='confirmPassword'  onChange={this.handleDate} value={this.state.name} className="form-control" autoComplete="current-password"
                    placeholder="Confirm Password" name="confirmPassword"/>
                <h4></h4>
              </div>

              
              <div className="form-group">
                <input type="date" id='age'  onChange={this.handleDate} value={this.state.name} className="form-control" autoComplete=""
                    placeholder="Age" name="age"/>
                <h4></h4>
              </div>
                
              <div className="form-group">
              

              <select  className="form-control" onChange={this.handleDate} value={this.state.name}  name="type" id="sel1">
              <option >Other</option>
              <option >Male</option>
              <option >Female</option>
              </select>
    
              </div>


              
              <Link to=''>
                <Button bsStyle='primary' 
                type='submit' 
                onClick={this.onSubmit}
                className='btnSign'>Sign Up </Button>
              </Link>
            </form>
                                   
            </div>
          </div>
        </div>
      </div>

      </div>
    );
  }
}
export default Sign;