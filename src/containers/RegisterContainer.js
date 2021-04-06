import React, { useState } from 'react';
import Register from '../components/auth/register/Register';
import { CREATE_USER_MUTATION } from '../GraphQL/Mutations';
import { useMutation } from '@apollo/client';

const RegisterContainer = () => {
  const [inputs, setInputs] = useState({
    id: "",
    password: "", 
    check: "",
    nickname: "",
    email: "",
  });
  const [errorText,setErrorText] = useState({
    idError: true,
    passwordError: true,
    checkError: true,
    nicknameError: true,
    emailError: true,
  })

  const {id, password,check,nickname,email} = inputs;
  const [signup, {error}] = useMutation(CREATE_USER_MUTATION);

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

  const submit = () => {
    signup({
      variables: {
        id: id,
        password: password,
        email: email,
        nickname: nickname,
      }
    })
    if(error){
      console.log(error);
    }
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
    <Register
      inputs={inputs}
      errorText={errorText}
      propsContainer={propsContainer}
    />
  );
};

export default RegisterContainer;