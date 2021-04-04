import React, { useState } from 'react';
import Login from '../components/auth/login/Login';

const LoginContainer = () => {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });
  const [errorText,setErrorText] = useState({
    idError: false,
    passwordError: false,
  });

  const inputChange = e => {
    const {name, value} = e.target;
    const nextInputs = {
      ...inputs,
      [name]: value,
    }
    setInputs(nextInputs);
  }

  const submit = e => {
    // 서버통신
    setErrorText({
      id: true,
      password: true,
    })
  }

  const enter = e => {
    if(e.key == "Enter") {
      submit();
    }
  }

  let propsContainer = {
    inputs: inputs,
    errorText: errorText,
    inputChange: inputChange,
    submit: submit,
    enter: enter,
  }

  return (
    <div>
      <Login
        errorText={errorText}
        inputs={inputs}
        propsContainer={propsContainer}
      />
    </div>
  );
};

export default LoginContainer;