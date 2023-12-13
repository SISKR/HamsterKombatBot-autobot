import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import "./signup.css";

export default class LoginPage extends Component {
    render() {
        return (
            <div className="hello">
                <div className="sec-text"></div>
                <form className="form">
                    <h1>Login</h1>
                    <br></br>
                    <label htmlFor="userName"><b> <FaUser />  Username/Email</b></label>
                    <input className="input-box" type="text" placeholder=" Enter Username/email" name="userName" required />
                    <br />

                    <label className="pass1" htmlFor="password"><b> <RiLockPasswordFill /> Password</b></label>
                    <input className="input-box" type="password" placeholder=" Enter Password" name="password" required />
                    <br />

                    <button className="Loginubtn" type="submit">Login</button>&nbsp;<br></br>
                    <label>
                        <input type="checkbox" checked={true} name="remember" style={{ marginBottom: '15px' }} /> Remember me
                    </label>

                    <label>
                        <a className="forgot" href="forgot">ForgotPassword</a>
                    </label><br></br>
                    <Link to="/Signup" className="signup-link">Create an account</Link>
                    <br></br>
                    <br></br>

                    <div CLASS="SOCIALMEDIA">
                        <FontAwesomeIcon icon={faGoogle} size="2x" style={{ margin: '10px', cursor: 'pointer' }} />
                        <FontAwesomeIcon icon={faFacebook} size="2x" style={{ margin: '10px', cursor: 'pointer' }} />
                    </div>
                </form>
            </div>
        );
    }
}
