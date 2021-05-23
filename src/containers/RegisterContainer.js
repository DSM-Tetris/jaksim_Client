import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
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
  const [errorText,setErrorText] = useState(false);
  const history = useHistory();

  const [signup] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: (signupData) => {
      let type = signupData.signup.__typename;
      if(type === "SuccessSignup") {
        S.successSignup(setErrorText);
        history.push('/login');
      }
      if(type === "AlreadyUserExists") S.alreadyUserExists(setErrorText);
      if(type === "BadRequest") S.badRequest(setErrorText);
      if(type === "VerifyEmailFailed") S.verifyEmailFailed(setErrorText);
    }
  });

  const [sendVerificationEmail] = useMutation(EMAIL, {
    onCompleted: (emailData) => {
      let type = emailData.sendVerificationEmail.__typename;
      if(type === "BadRequest") {alert("이메일 입력 형식을 확인해주세요.")}
      if(type === "SendEmailSuccess") {alert("성공적으로 인증코드를 전송했습니다.")}
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
    if(password === check) {
      signup({variables: {
        username,
        password,
        email,
        authCode,
        nickname
      }});
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
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