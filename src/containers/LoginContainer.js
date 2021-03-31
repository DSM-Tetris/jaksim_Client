import React, { useState } from 'react';
import Login from '../components/auth/login/Login';

const LoginContainer = () => {
  const [errorText,setErrorText] = useState({
    id: false,
    password: true,
  });

  return (
    <div>
      <Login
        error={errorText}
      />
    </div>
  );
};

export default LoginContainer;