import React, { useState } from 'react';
import LoginIcon from "@mui/icons-material/Login";
import Button from '@mui/material/Button';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import "./css/signup.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    userName: "",
    password: "",
    errorMessage: "",
    successMessage: "",
  });

  const handleInputChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const { userName, password } = state;

    // Simulate a successful login without checking credentials
    navigate(`/home/${userName}`);
    setState({ ...state, successMessage: "Login successful!", errorMessage: "" });
  };
  
  return (
    <div className="hello">
      <form className="form" onSubmit={handleLogin}>
        <h1 className='log'>LOGIN</h1>
        <label htmlFor="userName">
          <b>
            <p className='ik'><FaUser /></p>
            <p className='sp'> USERNAME/EMAIL</p>
          </b>
        </label>
        <input
          className="input-box"
          type="text"
          placeholder=" Enter Username/email"
          name="userName"
          onChange={handleInputChange}
          required
        />
        <label className="pass1" htmlFor="password">
          <b>
            <p className='ik'><RiLockPasswordFill /></p>
            <p className='sp1'> PASSWORD</p>
          </b>
        </label>
        <input
          className="input-box"
          type="password"
          placeholder=" Enter Password"
          name="password"
          onChange={handleInputChange}
          required
        />

        {state.errorMessage && <div style={{ color: 'red' }}>{state.errorMessage}</div>}
        {state.successMessage && <div style={{ color: 'green' }}>{state.successMessage}</div>}

        <Button variant="contained" className="Loginubtn" fullWidth startIcon={<LoginIcon />} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
