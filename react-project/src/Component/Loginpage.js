import React, { Component } from 'react';
import "./signup.css";

export default class LoginPage extends Component {
  
    componentDidMount() {
        this.load();
    }

    load = () => {
        const text = document.querySelector(".sec-text");
        setTimeout(() => {
            text.textContent = "Welcome to Mysite";
        }, 0);
        setTimeout(() => {
            text.textContent = "Online Renovation Platform";
        }, 4000);
        setTimeout(() => {
            text.textContent = "Samadhanmitra";
        }, 8000);
    };

    render() {
        return (
            <div class="hello" >
            <div className="sec-text"></div>
                <form className="form">
                    <h1>Login</h1>
                    <label htmlFor="userName"><b>Username/Email</b></label>
                    <input className="input-box" type="text" placeholder="Enter Username/email" name="userName" required />
                    <br />
                    
                    <label className="pass1" htmlFor="password"><b>Password</b></label>
                    <input className="input-box" type="password" placeholder="Enter Password" name="password" required />
                    <br />

                    <button onClick={this.handleNavigate} className="Loginubtn" type="submit">Login </button>&nbsp;<br></br>
                    <label>
                        <input type="checkbox" checked={true} name="remember" style={{ marginBottom: '15px' }} /> Remember me
                    </label>

                    <label>
                        <a className="forgot" href="url">Forgot Password</a>
                    </label>
                </form>
            </div>
        );
    }
}
