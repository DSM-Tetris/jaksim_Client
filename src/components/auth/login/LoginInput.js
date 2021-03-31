import React from 'react';
import * as A from '../authStyle';     // auth 한정 공유 styled-components
import * as S from './style';          // signup 전용 styled-components

const errorText = "올바르지 않은 입력 형식입니다."

const LoginInput = ({type, error}) => {
  return (
    <A.AuthInputWrapper>
      <A.AuthIcon src="/src/assets/images/user.png"/>
      <S.Input type={type} placeholder={type}></S.Input>
      <A.AuthErrorText error={error}>{errorText}</A.AuthErrorText>
    </A.AuthInputWrapper>
  );
};

export default LoginInput;