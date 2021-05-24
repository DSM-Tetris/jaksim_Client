import React from 'react';
import * as S from './style';
import {Background} from '../shareStyle';
import Header from '../header/Header';
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
          <S.Category>글 작성</S.Category>
        </S.CategoryBox>
        <S.TagBox>
          <span>dd</span>
          <span>dd</span>
          <span>dd</span>
          <span>dd</span>
          <span>dd</span>
          <span>dd</span>
          <span>dd</span>
          <span>dd</span>
          <span>dd</span>
          <span>dd</span>
        </S.TagBox>
      </S.Container>
    </div>
  );
};

export default Write;