import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Login from '../components/auth/login/Login';
import * as S from '../lib/login/LoginType';
import { LOGIN } from '../GraphQL/Mutations';

const LoginContainer = () => {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });
  const [errorText,setErrorText] = useState({
    idError: false,
    passwordError: false,
  });
  const history = useHistory();

  const [login] = useMutation(LOGIN, {
    onCompleted: (loginData) => {
      const type = loginData.login;
      if(type.__typename === "Login") {
        S.login(type);
        history.push('/');
      }
      if(type.__typename === "InvalidLoginInfo") S.invalidLoginInfo();
      if(type.__typename === "BadRequest") S.badRequest();
    }
  });

  const {id, password} = inputs;

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
    login({variables: {
      username: id,
      password
    }
    })
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