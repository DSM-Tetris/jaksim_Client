import React from 'react';
import * as A from '../authStyle';     // auth 한정 공유 styled-components
import * as S from './style';          // signup 전용 styled-components

const errorText = "올바르지 않은 입력 형식입니다."
const placeholder = {
  id: "아이디 (영문, 숫자 6~8글자 이내)",
  password: "비밀번호 (영문, 숫자 8~20글자 이내)",
  check: "비밀번호 확인",
  nickname: "닉네임 (영문, 한글, 숫자 2~6글자 이내)",
  email: "이메일",
}

// 중복확인 버튼 없음
export const RegisterPasswordInput = ({icon, type, input, propsContainer}) => {
  const {inputChange, enter} = propsContainer;

  return (
    <A.AuthInputWrapper>
      <A.AuthIcon src={icon} errorMsg={errorText}/>
      <S.Input 
        type={type}
        name={type}
        placeholder={placeholder.password}
        value={input}
        onChange={inputChange}
        onKeyPress={enter}
      />
      <S.InvisibleBox />
    </A.AuthInputWrapper>
  );
};

export const RegisterCheckInput = ({icon, type, input, propsContainer}) => {
  const {inputChange, enter} = propsContainer;

  return (
    <A.AuthInputWrapper>
      <A.AuthIcon src={icon} errorMsg={errorText}/>
      <S.Input 
        type="password"
        name={type}
        placeholder={placeholder.check}
        value={input}
        onChange={inputChange}
        onKeyPress={enter}
      />
      <S.InvisibleBox />
    </A.AuthInputWrapper>
  );
};

export const RegisterNicknameInput = ({icon, type, input, propsContainer}) => {
  const {inputChange, enter} = propsContainer;
  
  return (
    <A.AuthInputWrapper>
      <A.AuthIcon src={icon} errorMsg={errorText}/>
      <S.Input 
        type={type}
        name={type}
        placeholder={placeholder.nickname}
        value={input}
        onChange={inputChange}
        onKeyPress={enter}
      />
      <S.InvisibleBox />
    </A.AuthInputWrapper>
  );
};

export const RegisterIdCheck = ({icon, type, input, propsContainer}) => {
  const {inputChange, checkOverlap, enter} = propsContainer;
  
  return (
    <A.AuthInputWrapper>
      <A.AuthIcon src={icon} />
      <S.Input 
        type={type}
        name={type}
        placeholder={placeholder.id}
        value={input}
        onChange={inputChange}
        onKeyPress={enter}
      />
      <S.InvisibleBox />
    </A.AuthInputWrapper>
  );
};

export const RegisterEmailSend = ({icon, type, input, propsContainer}) => {
  const {inputChange, checkOverlap, enter} = propsContainer;
  
  return (
    <A.AuthInputWrapper>
      <A.AuthIcon src={icon} />
      <S.Input 
        type={type}
        name={type}
        placeholder={placeholder.email}
        value={input}
        onChange={inputChange}
        onKeyPress={enter}
      />
      <S.DoubleCheck name="email" onClick={checkOverlap} >인증코드 요청</S.DoubleCheck>
    </A.AuthInputWrapper>
  );
};

export const RegisterEmailCheck = ({icon, error, input, propsContainer}) => {
  const {inputChange, checkOverlap, enter} = propsContainer;
  
  return (
    <A.AuthInputWrapper>
      <A.AuthIcon src={icon} errorMsg={errorText}/>
      <S.Input 
        type="text"
        name="authCode"
        placeholder="인증번호 확인하기"
        value={input}
        onChange={inputChange}
        onKeyPress={enter}
        maxLength="6"
      />
      <A.AuthErrorText error={error}>입력 형식을 확인해주세요</A.AuthErrorText>
      <S.InvisibleBox />
    </A.AuthInputWrapper>
  );
};


