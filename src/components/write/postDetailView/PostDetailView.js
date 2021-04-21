import React from 'react';
import {Background} from '../../shareStyle';
import * as S from './style';

const PostDetailView = () => {
  return (
    <div>
      <Background />
      <S.Container>
        <S.PostBox>
          <S.TitleText>글 개별 보기 페이지 제목</S.TitleText>
          <S.TagBox>
            <S.TagText>#어쩌구 #저쩌구 #환경뭐시기</S.TagText>
          </S.TagBox>
          <S.Img src="/src/assets/images/fox.png"/>
          <S.PostText>귀엽다</S.PostText>
        </S.PostBox>
      </S.Container>
    </div>
  );
};

export default PostDetailView;