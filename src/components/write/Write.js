import React from 'react';
import * as S from './style';
import {Background} from '../shareStyle';
import Header from '../header/Header';
import CategoryItem from './category/CategoryItem';
import PostItem from './posts/PostItem';

const Write = () => {
  return (
    <div>
      <Background />
      <S.Container>
        <Header />
        <S.PostsView>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />

        </S.PostsView>
        <S.CategoryBox>
          <S.Home>홈</S.Home>
          <S.Category>카테고리</S.Category>
          <CategoryItem>전체보기(10)</CategoryItem>
          <S.CategorySetting>카테고리 관리하기</S.CategorySetting>
        </S.CategoryBox>
        <S.TagBox>
        </S.TagBox>
      </S.Container>
    </div>
  );
};

export default Write;