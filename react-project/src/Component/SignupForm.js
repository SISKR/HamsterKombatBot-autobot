import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Loginpage from './Loginpage';
import "./css/signup.css";
import "./css/Signup2.css";

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginPage: false,
    };
  }

  handleLoginButtonClick = () => {
    this.setState({ showLoginPage: true });
  };

  render() {
    return (
     <center>
     <div className="form">
     <form>
     <h1>Sign Up</h1>
     <label className='inputtag' htmlFor="firstName"><b>First Name</b></label>
     <input className="input-box1" type="text" placeholder="  Enter first name" name="firstName" required />
     <label htmlFor="lastName"><b>Last Name</b></label>
     <input className="input-box1" type="text" placeholder="  Enter Last name" name="lastName" required />
     <label htmlFor="email"><b>Email</b></label>
     <input className="input-box1" type="email" placeholder="  Enter Email" name="email" required />
     <label className="pass1" htmlFor="password"><b>Password</b></label>
     <input className="input-box1" type="password" placeholder="  Enter Password" name="password" required />
     <label htmlFor="confirmPassword"><b>Confirm Password</b></label>
     <input className="input-box1" type="password" placeholder="  Confirm Password" name="confirmPassword" required />
     <label>
     <input type="checkbox" checked={true} name="remember" style={{ marginBottom: '15px' }} /> Remember me
     </label>
     <Button variant="contained" type="submit" className="signupbtn">
     Sign Up
     </Button>
     
     
     {this.state.showLoginPage && <Loginpage />}
     
     <p className='link1'>
     <h3>Already have an account?{' '}</h3>
     
     </p>
     </form>
     </div>
     </center>
     );
  }
}
