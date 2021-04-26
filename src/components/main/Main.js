import React from 'react';
import * as S from './style';
import {Background} from '../shareStyle';
import Header from '../header/Header';

const Main = () => {
  return (
    <div>
      <Background />
      <S.Container>
        <Header />
      </S.Container>
    </div>
  );
};

export default Main;