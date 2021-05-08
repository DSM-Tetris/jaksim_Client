import React, { useEffect, useState } from 'react';
import Register from '../components/auth/register/Register';
import * as S from '../lib/register/SignupType';
import { CREATE_USER_MUTATION, EMAIL } from '../GraphQL/Mutations';
import { useMutation } from '@apollo/client';

const RegisterContainer = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "", 
    check: "",
    nickname: "",
    email: "",
    authCode: "",
  });
  const [errorText,setErrorText] = useState({
    usernameError: false,
    passwordError: false,
    checkError: false,
    nicknameError: false,
    emailError: false,
  });

  const [signup, {data :signupData}] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: (signupData) => {
      let type = signupData.signup.__typename;
      if(type === "SuccessSignup") S.successSignup();
      if(type === "AlreadyUserExists") S.alreadyUserExists();
      if(type === "BadRequest") S.badRequest();
      if(type === "VerifyEmailFailed") S.verifyEmailFailed();
    }
  });
  const [sendVerificationEmail, {data: emailData}] = useMutation(EMAIL, {
    onCompleted: (emailData) => {
      let type = emailData.sendVerificationEmail.__typename;
      if(type === "BadRequest") setErrorText({emailError: true});
      if(type === "SendEmailSuccess") {
        setErrorText({emailError: false});

      }
    }
  }); 
  
  const {username, password,check,nickname,email, authCode} = inputs;

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
    sendVerificationEmail({variables:{email}})
  }

  const submit = (e) => {
    e.preventDefault();
    // 요청
    signup({variables: {
      username,
      password,
      email,
      authCode,
      nickname
    }});

    setErrorText({
      username: false,
      password: false, 
      check: false,
      nickname: false,
      email: false
    });
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