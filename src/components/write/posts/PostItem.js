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
      <S.Text>이상하게 한글이 안써져요</S.Text>
    </S.PostItem>
  );
};

export default PostItem;