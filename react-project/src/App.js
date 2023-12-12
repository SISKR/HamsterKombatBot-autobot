import './App.css';
import React, { useState } from 'react';
import Loginpage from './Component/Loginpage';
import SignupForm from './Component/SignupForm';

function App() {
  const [currentPage, setCurrentPage] = useState('SignupForm');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'SignupForm' && <SignupForm onNavigate={() => handleNavigate('Loginpage')} />}
      {currentPage === 'Loginpage' && <Loginpage onNavigate={() => handleNavigate('SignupForm')} />}
    </div>
  );
}

export default App;
