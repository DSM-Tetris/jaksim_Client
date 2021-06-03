import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import {useHistory} from 'react-router-dom';
import { GET_POST } from '../../../GraphQL/Queries';
import {Background} from '../../shareStyle';
import * as S from './style';

const PostDetailView = () => {
  const [post,setPost] = useState("");
  const history = useHistory();
  const token = localStorage.getItem("token");

  // 특정 게시물 자세히 보기
  let id = history.location.pathname;
  id = Number(id.slice(6));

  const {data} = useQuery(GET_POST, {
    variables: {postId: id},
    context: {
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    }
  })

  useEffect(()=>{
    if(data) {
      setPost(data.getPost.post);
    }
  },[data]);
  
  console.log(post);

  return (
    <div>
      <Background />
      {
        post && 
        <S.Container>
          <S.CloseBtn onClick={()=>history.push('/post')}/>
          <S.PostBox>
            <S.TitleText>{post.title}</S.TitleText>
            <S.TagBox>
              {
                post.tags.map((d)=>(
                  <S.TagText key={d.tagName}>{d.tagName}</S.TagText>
                ))
              }
            </S.TagBox>
            <S.Img src="/src/assets/images/jok.jpg"/>
            <S.PostText>{post.content}</S.PostText>
          </S.PostBox>
        </S.Container>
      }
    </div>
  );
};

export default PostDetailView;