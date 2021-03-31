import React from 'react';
import {RegisterInput, RegisterCheck} from './RegisterInput';
import * as O from '../../shareStyle'; // 전체 공유 styled-components
import * as A from '../authStyle';     // auth 한정 공유 styled-components
import * as S from './style';          // signup 전용 styled-components
import user from '/src/assets/images/user.png';
import padlock from '/src/assets/images/padlock.png';

const placeholder = {
  id: "아이디 (영문, 숫자 6~8글자 이내)",
  password: "비밀번호 (영문, 숫자 8~20글자 이내)",
  check: "비밀번호 확인",
  nickname: "닉네임 (영문, 한글, 숫자 2~6글자 이내)",
  email: "이메일",
}

const Register = ({error}) => {
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
            <RegisterCheck placeholder={placeholder.id} icon={user} error={true}/>
            <RegisterInput placeholder={placeholder.password} icon={padlock} error={false} />
            <RegisterInput placeholder={placeholder.check} icon={padlock} error={false} />
            <RegisterInput placeholder={placeholder.nickname} icon={user} error={true} />
            <RegisterCheck placeholder={placeholder.email} icon={user} error={false} />
          </A.AuthForm> 
          <A.AuthSubmit>REGISTER</A.AuthSubmit>
        </S.Inner>
      </A.AuthContainer>
    </div>
  )
}

export default Register;