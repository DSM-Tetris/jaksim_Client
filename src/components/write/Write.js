import React from 'react';
import * as S from './style';
import {Background} from '../shareStyle';
import Header from '../header/Header';
import PostItem from './posts/PostItem';
import { useHistory } from 'react-router';

const Write = ({data}) => {
  const history = useHistory();
  
  return (
    <div>
      <Background />
      <S.Container>
        <Header />
        <S.PostsView>
          {
            data && data.posts.map((d)=>(
              <PostItem
                key={d.id}
                id={d.id}
                title={d.title}
                image={d.image}
                tags={d.tags}
                info={d.contentPreview}
              />
            ))  
          }
        </S.PostsView>
        <S.CategoryBox>
          <S.Home onClick={()=>history.push("/")}>홈</S.Home>
          <S.Category onClick={()=>history.push("/write")}>글 작성</S.Category>
        </S.CategoryBox>
        <S.TagBox>
          <S.Tags>플라스틱</S.Tags>
          <S.Tags>비닐</S.Tags>
          <S.Tags>환경</S.Tags>
          <S.Tags>비닐봉지</S.Tags>
          <S.Tags>쓰레기</S.Tags>
          <S.Tags>라면</S.Tags>
          <S.Tags>청소</S.Tags>
          <S.Tags>히히헤헤호호</S.Tags>
          <S.Tags>순위</S.Tags>
          <S.Tags>10등</S.Tags>
        </S.TagBox>
      </S.Container>
    </div>
  );
};

export default Write;