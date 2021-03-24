import React from 'react';
import * as S from './style';
import {Background} from '../shareStyle';

const Main = () => {
  return (
    <div>
    <Background />
    <S.Container>
      <S.Logout>로그아웃</S.Logout> 
    </S.Container>
    </div>
  );
};

export default Main;