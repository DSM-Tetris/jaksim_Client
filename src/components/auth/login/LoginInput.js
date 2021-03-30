import React from 'react';
import * as A from '../authStyle';     // auth 한정 공유 styled-components
import * as S from './style';          // signup 전용 styled-components

const LoginInput = ({type}) => {
  return (
    <A.AuthInputWrapper>
      <A.AuthIcon src="/src/assets/images/user.png"/>
      <S.Input type={type} placeholder={type}></S.Input>
    </A.AuthInputWrapper>
  );
};

export default LoginInput;