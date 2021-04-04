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
export const RegisterPasswordInput = ({icon, type, error, input, propsContainer}) => {
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
      <A.AuthErrorText error={error}>{errorText}</A.AuthErrorText>
      <S.InvisibleBox />
    </A.AuthInputWrapper>
  );
};

export const RegisterCheckInput = ({icon, type, error, input, propsContainer}) => {
  const {inputChange, enter} = propsContainer;

  return (
    <A.AuthInputWrapper>
      <A.AuthIcon src={icon} errorMsg={errorText}/>
      <S.Input 
        type={type}
        name={type}
        placeholder={placeholder.check}
        value={input}
        onChange={inputChange}
        onKeyPress={enter}
      />
      <A.AuthErrorText error={error}>{errorText}</A.AuthErrorText>
      <S.InvisibleBox />
    </A.AuthInputWrapper>
  );
};

export const RegisterNicknameInput = ({icon, type, error, input, propsContainer}) => {
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
      <A.AuthErrorText error={error}>{errorText}</A.AuthErrorText>
      <S.InvisibleBox />
    </A.AuthInputWrapper>
  );
};

// 중복확인 버튼이 있음.
export const RegisterIdCheck = ({icon, type, error, input, propsContainer}) => {
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
      <A.AuthErrorText error={error}>{errorText}</A.AuthErrorText>
      <S.DoubleCheck name="id" onClick={checkOverlap}>중복확인</S.DoubleCheck>
    </A.AuthInputWrapper>
  );
};

export const RegisterEmailCheck = ({icon, type, error, input, propsContainer}) => {
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
      <A.AuthErrorText error={error}>{errorText}</A.AuthErrorText>
      <S.DoubleCheck name="email" onClick={checkOverlap}>중복확인</S.DoubleCheck>
    </A.AuthInputWrapper>
  );
};

