import React, { useState } from 'react';
import Register from '../components/auth/register/Register';
// import { CREATE_USER_MUTATION } from '../GraphQL/Mutations';
import { gql, useMutation } from '@apollo/client';

const RegisterContainer = () => {
  const [inputs, setInputs] = useState({
    id: "",
    password: "", 
    check: "",
    nickname: "",
    email: "",
    code: "123456",
  });
  const [errorText,setErrorText] = useState({
    idError: false,
    passwordError: false,
    checkError: false,
    nicknameError: false,
    emailError: false,
  })

  const CREATE_USER_MUTATION = gql`
    mutation Signup($username: String!, $password: String!, $nickname: String!, $email: String!, $authCode: String!) {
      signup(username: $username, password: $password, nickname: $nickname, email: $email, authCode: $authCode ) {
        data {
          username
          password
          nickname
          email
          authCode
        }
      }
    }
  `

  const EMAIL = gql`
    mutation SendVerificationEmail($emailCheck: String!) {
      sendVerificationEmail(email: $email) {
        email
      }
    }
  `

  const [signup, {data}] = useMutation(CREATE_USER_MUTATION);
  const [sendVerificationEmail] = useMutation(EMAIL);

  const {id, password,check,nickname,email, code} = inputs;

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
    sendVerificationEmail({variables: {email}})
    console.log(e.target.name + "중복확인");
  }

  const submit = (e) => {
    e.preventDefault();
    console.log("hello");
    signup({variables: {
      username: id,
      password: password,
      email: email,
      authCode: code,
      nickname: nickname
    }})
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