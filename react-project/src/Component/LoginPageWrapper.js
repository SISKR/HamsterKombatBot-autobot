// LoginPageWrapper.js
import React from 'react';
import { AuthProvider } from './AuthContext'; // Adjust the path
import Loginpage from './Loginpage'; // Adjust the path

const LoginPageWrapper = () => {
  return (
    <AuthProvider>
      <Loginpage />
    </AuthProvider>
  );
};

export default LoginPageWrapper;
