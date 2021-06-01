import React from 'react';
import * as S from './style';
import {useHistory} from 'react-router-dom';

const PostItem = ({title,tags,image,info}) => {
  const history = useHistory();

  console.log(image);

  return (
    <S.PostItem onClick={()=>history.push("/post/13")}>
      <S.Title>{title}</S.Title>
      <S.TagBox>
        {
          tags.map((t)=>(
            <S.Tag key={t.tagName}>{t.tagName}</S.Tag>
          ))
        }
        {/* <S.Tag>{tags}</S.Tag> */}
      </S.TagBox>
        <S.Thumbnail image={image}/>
      <S.Text>{info}</S.Text>
    </S.PostItem>
  );
};

export default PostItem;