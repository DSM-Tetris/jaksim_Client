import React from 'react';
import * as S from './style';
import {Background} from '../shareStyle';
import Header from '../header/Header';
import CategoryItem from './category/CategoryItem';

const Write = () => {
  return (
    <>
      <Background />
      <S.Container>
        <Header />
        <S.CategoryBox>
          <S.Home>홈</S.Home>
          <S.Category>카테고리</S.Category>
          <CategoryItem>전체보기(10)</CategoryItem>
          <S.CategorySetting>카테고리 관리하기</S.CategorySetting>
        </S.CategoryBox>
      </S.Container>
    </>
  );
};

export default Write;