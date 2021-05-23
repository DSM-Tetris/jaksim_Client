import React from 'react';
import * as R from './RegisterInput';  // RegisterInput 전부 불러옴
import * as O from '../../shareStyle'; // 전체 공유 styled-components
import * as A from '../authStyle';     // auth 한정 공유 styled-components
import * as S from './style';          // signup 전용 styled-components
import user from '/src/assets/images/user.png';
import padlock from '/src/assets/images/padlock.png';

const Register = ({errorText, inputs, propsContainer}) => {
  const {username, password, check, nickname, email, authCode } = inputs;

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
            <R.RegisterIdCheck 
              icon={user} 
              type="username" 
              input={username}
              propsContainer={propsContainer}
            />
            <R.RegisterPasswordInput 
              icon={padlock} 
              type="password" 
              input={password} 
              propsContainer={propsContainer}
            />
            <R.RegisterCheckInput 
              icon={padlock} 
              type="check" 
              input={check} 
              propsContainer={propsContainer}
            />
            <R.RegisterNicknameInput 
              icon={user}
              type="nickname" 
              input={nickname} 
              propsContainer={propsContainer}
            />
            <R.RegisterEmailSend 
              icon={user} 
              type="email" 
              input={email} 
              propsContainer={propsContainer}
            />
            <R.RegisterEmailCheck 
              icon={padlock} 
              error={errorText} 
              type="authCode" 
              input={authCode} 
              propsContainer={propsContainer}
            />
          </A.AuthForm> 
          <A.AuthSubmit onClick={propsContainer.submit}>REGISTER</A.AuthSubmit>
        </S.Inner>
      </A.AuthContainer>
    </div>
  )
}

export default Register;