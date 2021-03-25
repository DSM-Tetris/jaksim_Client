import React from 'react';
import * as O from '../../shareStyle'; // 전체 공유 styled-components
import * as A from '../authStyle';     // auth 한정 공유 styled-components
import * as S from './style';          // loign 전용 styled-components

const Login = () => {

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
            <A.AuthInputWrapper>
              <A.AuthIcon src="/src/assets/images/user.png"/>
              <S.Input type="id" placeholder="id"></S.Input>
            </A.AuthInputWrapper>
            <A.AuthInputWrapper>
              <A.AuthIcon src="/src/assets/images/padlock.png"/>
              <S.Input type="password" placeholder="password"></S.Input>
            </A.AuthInputWrapper>
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