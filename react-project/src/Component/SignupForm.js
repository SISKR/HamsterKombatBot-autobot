import React, { Component } from 'react'
import "./signup.css";

export default class SignupForm extends Component {

    handleNavigate = () => {
        const { onNavigate } = this.props;
        if (onNavigate) {
          onNavigate();
        }
      };

  render() {
    return (
      <div className="form">
      <form>
        <h1>Sign Up</h1>
        <label For="firstName"><b>First Name</b></label>
        <input class="input-box" type="text" placeholder=" Enter first name" name="firstName" required />
        <br />
        
        <label For="lastName"><b>Last Name</b></label>
        <input class="input-box" type="text" placeholder=" Enter Last name" name="lastName" required />
        <br />
        
        <label For="phoneNumber"><b>Phone Number</b></label>
        <input  class="input-box" type="tel" placeholder=" Enter Phone Number" name="phoneNumber" required />
        <br />
        
        <label For="email"><b>Email</b></label>
        <input class="input-box" type="email" placeholder=" Enter Email" name="email" required />
        <br />
        
        <label class="pass1" For="password"><b>Password</b></label>
        <input class="input-box"  type="password" placeholder=" Enter Password" name="password" required />
        <br />
        
        <label For="confirmPassword"><b>Confirm Password</b></label>
        <input class="input-box" type="password" placeholder=" Repeat Password" name="confirmPassword" required />
        <br />
        
        <button type="submit" className="signupbtn">Sign Up</button>
        
        <label>
          <input type="checkbox" checked={true} name="remember" style={{ marginBottom: '15px' }} /> Remember me
        </label>

        <p>
        <h3>Already have an account?{' '}
        <button onClick={this.handleNavigate}>Login</button></h3>
      </p>
      </form>
    </div>
    )
  }
}
