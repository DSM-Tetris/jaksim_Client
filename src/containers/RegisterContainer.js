import React, { useState } from 'react';
import Register from '../components/auth/register/Register';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const RegisterContainer = () => {
  const [inputs, setInputs] = useState({
    id: "",
    password: "", 
    check: "",
    nickname: "",
    email: "",
  });
  const [errorText,setErrorText] = useState({
    id: false,
    password: false, 
    check: false,
    nickname: false,
    email: false
  })

  const inputChange = e => {
    const {name, value} = e.target;
    const nextInputs = {
      ...inputs,
      [name]: value,
    }
    setInputs(nextInputs);
  }

  const checkOverlap = e => {
    // 중복확인 서버 통신
    e.preventDefault();
    console.log(e.target.name + "중복확인");
  }

  const submit = e => {
    // 서버통신
    console.log("submit");
    setErrorText({
      id: false,
      password: false, 
      check: false,
      nickname: false,
      email: false
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
    checkOverlap: checkOverlap,
    submit: submit,
    enter: enter,
  }

  return (
    <div>
      <Register
        errorText={errorText}
        inputs={inputs}
        propsContainer={propsContainer}
      />
    </div>
  );
};

export default RegisterContainer;