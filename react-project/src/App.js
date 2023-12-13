import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from './Component/Loginpage';
import SignupForm from './Component/SignupForm';


export default function AppI() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/Signup" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}