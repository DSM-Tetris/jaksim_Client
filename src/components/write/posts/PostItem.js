import React from 'react';
import * as S from './style';

const PostItem = () => {
  return (
    <S.PostItem>
      <S.Title>title</S.Title>
      <S.TagBox>
        <S.Tag>#efji</S.Tag>
      </S.TagBox>
        <S.Thumbnail />
      <S.Text>여기서는 입력이 잘 돼요</S.Text>
    </S.PostItem>
  );
};

export default PostItem;