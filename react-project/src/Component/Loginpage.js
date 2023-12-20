import React, { Component } from 'react';
import Button from '@mui/material/Button';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import "./css/signup.css";

export default class LoginPage extends Component {
    render() {
        return (
            <div className="hello">
                <div className="sec-text"></div>
                <form className="form">
                    <h1 className='log'>LOGIN</h1>
                    <label htmlFor="userName"><b> <p className='ik' ><FaUser /></p><p className='sp'>USERNAME/EMAIL</p></b></label>
                    <input className="input-box" type="text" placeholder=" Enter Username/email" name="userName" required />
                    <label className="pass1" htmlFor="password"><b> <p class='ik'><RiLockPasswordFill /></p><p className='sp1'> PASSWORD</p></b></label>
                    <input className="input-box" type="password" placeholder=" Enter Password" name="password" required />
                    <Button variant="contained" className="Loginubtn" type="submit">Login</Button>&nbsp;<br></br>
                    <label>
                        <input type="checkbox"  name="remember" style={{ marginBottom: '15px' }} />Remember me 
                    </label>
                    <label>
                        <a className="forgot" href="forgot">ForgotPassword</a>
                    </label>
                    <div CLASS="SOCIALMEDIA">
                        <FontAwesomeIcon icon={faGoogle} size="2x" style={{ margin: '10px', cursor: 'pointer' }} />
                        <FontAwesomeIcon icon={faFacebook} size="2x" style={{ margin: '10px', cursor: 'pointer' }} />
                    </div>
                    <div className='Signup1'>
                    <Button variant="outline" color="">signup</Button>
                    </div>
                    </form>
                    </div>
                    );
                }
            }
