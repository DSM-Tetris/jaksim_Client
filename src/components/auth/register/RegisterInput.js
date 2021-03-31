import React from 'react';
import * as A from '../authStyle';     // auth 한정 공유 styled-components
import * as S from './style';          // signup 전용 styled-components

const errorText = "올바르지 않은 입력 형식입니다."

export const RegisterInput = ({placeholder, icon, error}) => {
  return (
    <A.AuthInputWrapper>
      <A.AuthIcon src={icon} errorMsg={errorText}/>
      <S.Input placeholder={placeholder}/>
      <A.AuthErrorText error={error}>{errorText}</A.AuthErrorText>
      <S.InvisibleBox />
    </A.AuthInputWrapper>
  );
};

export const RegisterCheck = ({placeholder, icon, error}) => {
  return (
    <A.AuthInputWrapper>
      <A.AuthIcon src={icon} />
      <S.Input placeholder={placeholder} />
      <A.AuthErrorText error={error}>{errorText}</A.AuthErrorText>
      <S.DoubleCheck>중복확인</S.DoubleCheck>
    </A.AuthInputWrapper>
  )
}