import React from 'react';
import { IdInput } from './LoginInput';
import { PasswordInput } from './LoginInput';
import * as O from '../../shareStyle'; // 전체 공유 styled-components
import * as A from '../authStyle';     // auth 한정 공유 styled-components
import * as S from './style';          // loign 전용 styled-components


const Login = ({propsContainer, errorText, inputs}) => {
  const {idError, passwordError} = errorText;
  const {id, password} = inputs;

  console.log(idError);

  return (
    <div>
      <O.Background />
      <A.AuthContainer>
        <S.LoginImg src="/src/assets/images/loginImage.png" />
        <S.Inner>
          <A.AuthTitleContainer>
            <A.FirstChar>작심일일</A.FirstChar>
            <A.SecondChar>에 LOGIN하기</A.SecondChar>
          </A.AuthTitleContainer>
          <A.AuthForm>
            <IdInput
              type="id"
              input={id}
              error={idError}
              propsContainer={propsContainer}
            />
            <PasswordInput
              type="password"
              input={password}
              error={passwordError}
              propsContainer={propsContainer}
            />
          </A.AuthForm> 
          <S.ButtonWrapper>
            <S.Button>비밀번호 찾기</S.Button>
            <S.Button>회원가입 하기</S.Button>
          </S.ButtonWrapper>
          <A.AuthSubmit>LOGIN</A.AuthSubmit>
        </S.Inner>
      </A.AuthContainer>
    </div>
  );
};

export default Login;