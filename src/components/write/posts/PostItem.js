import React from 'react';
import * as S from './style';
import {useHistory} from 'react-router-dom';

const PostItem = ({id,title,tags,image,info}) => {
  const history = useHistory();

  console.log(id);

  return (
    <S.PostItem onClick={()=>history.push("/post/"+id)}>
      <S.Title>{title}</S.Title>
      <S.TagBox>
        {
          tags.map((t)=>(
            <S.Tag key={t.tagName}>#{t.tagName}</S.Tag>
          ))
        }
      </S.TagBox>
        <S.Thumbnail image={image}/>
      <S.Text>{info}</S.Text>
    </S.PostItem>
  );
};

export default PostItem;