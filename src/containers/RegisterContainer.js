import React, { useEffect, useState } from 'react';
import Register from '../components/auth/register/Register';
// import { CREATE_USER_MUTATION } from '../GraphQL/Mutations';
import { gql, useMutation } from '@apollo/client';

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
  const [datas, setDatas] = useState({});

  const CREATE_USER_MUTATION = gql`
    mutation Signup($username: String!, $password: String!, $nickname: String!, $email: String!, $authCode: String!) {
      signup( data: {username: $username, password: $password, email: $email, nickname: $nickname, authCode: $authCode }) {
        __typename
      }
    }
  `

  const EMAIL = gql`
    mutation SendVerificationEmail($email: String!) {
      sendVerificationEmail(email: $email) {
        __typename
      }
    }
  `

  const [signup, {data}] = useMutation(CREATE_USER_MUTATION);
  // const [sendVerificationEmail, {emailData, emailError}] = useMutation(EMAIL);
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