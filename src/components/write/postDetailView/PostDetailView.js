import React from 'react';
import {useHistory} from 'react-router-dom';
import {Background} from '../../shareStyle';
import * as S from './style';

const PostDetailView = () => {
  const history = useHistory();
  
  return (
    <div>
      <Background />
      <S.Container>
      <S.CloseBtn onClick={()=>history.push('/post')}/>
        <S.PostBox>
          <S.TitleText>제목관련</S.TitleText>
          <S.TagBox>
            <S.TagText>태그관련</S.TagText>
          </S.TagBox>
          <S.Img src="/src/assets/images/jok.jpg"/>
          <S.PostText>내용관련</S.PostText>
        </S.PostBox>
      </S.Container>
    </div>
  );
};

export default PostDetailView;