import React, { useState } from 'react';
import Register from '../components/auth/register/Register';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const RegisterContainer = () => {
  const [errorText,setErrorText] = useState({
    id: false,
    password: false, 
    check: false,
    nickname: false,
    email: false
  })

  return (
    <div>
      <Register
        error={errorText}
      />
    </div>
  );
};

export default RegisterContainer;