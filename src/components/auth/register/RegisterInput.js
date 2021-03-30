import React from 'react';
import * as A from '../authStyle';     // auth 한정 공유 styled-components
import * as S from './style';          // signup 전용 styled-components

export const RegisterInput = ({placeholder, icon}) => {
  return (
    <A.AuthInputWrapper>
      <A.AuthIcon src={icon} />
      <S.Input placeholder={placeholder}/>
      <S.InvisibleBox />
    </A.AuthInputWrapper>
  );
};

export const RegisterCheck = ({placeholder, icon}) => {
  return (
    <A.AuthInputWrapper>
      <A.AuthIcon src={icon} />
      <S.Input placeholder={placeholder} />
      <S.DoubleCheck>중복확인</S.DoubleCheck>
    </A.AuthInputWrapper>
  )
}