import React from 'react';
import * as O from '../../shareStyle'; // 전체 공유 styled-components
import * as A from '../authStyle';     // auth 한정 공유 styled-components
import * as S from './style';          // signup 전용 styled-components

const SignUp = () => {
  
  return(
    <div>
      <O.Background />
      <A.AuthContainer>
        <S.LoginImg src="/src/assets/images/signupImage.png" />
        <S.Inner>
          <A.AuthTitleContainer>
            <A.FirstChar>작심일일</A.FirstChar>
            <A.SecondChar>과 함께하기</A.SecondChar>
          </A.AuthTitleContainer>
          <A.AuthForm>
            <A.AuthInputWrapper>
              <A.AuthIcon src="/src/assets/images/user.png"/>
              <S.Input placeholder="아이디 (영문, 숫자 6~8글자 이내)"/>
            <S.DoubleCheck>중복확인</S.DoubleCheck>
            </A.AuthInputWrapper>
            <A.AuthInputWrapper>
              <A.AuthIcon src="/src/assets/images/padlock.png"/>
              <S.Input placeholder="비밀번호 (숫자,영문 8~20자 이내)"/>
              <S.InvisibleBox />
            </A.AuthInputWrapper>
            <A.AuthInputWrapper>
              <A.AuthIcon src="/src/assets/images/padlock.png"/>
              <S.Input placeholder="비밀번호 확인"/>
              <S.InvisibleBox />
            </A.AuthInputWrapper>
            <A.AuthInputWrapper>
              <A.AuthIcon src="/src/assets/images/user.png"/>
              <S.Input placeholder="닉네임 (영어,한글,숫자 2~6글자 이내)"/>
              <S.InvisibleBox />
            </A.AuthInputWrapper>
            <A.AuthInputWrapper>
              <A.AuthIcon src="/src/assets/images/user.png"/>
              <S.Input placeholder="이메일"/>
              <S.DoubleCheck>중복확인</S.DoubleCheck>
            </A.AuthInputWrapper>
          </A.AuthForm> 
          <A.AuthSubmit>SIGNUP</A.AuthSubmit>
        </S.Inner>
      </A.AuthContainer>
    </div>
  )
}

export default SignUp;