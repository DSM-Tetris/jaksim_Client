import React, {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import Write from '../components/write/Write';
import {GET_POSTS} from '../GraphQL/Queries';

const PostContainer = () => {
  const [a,setA] = useState({});
  const token = localStorage.getItem("token");

  const {loading, error, data} = useQuery(GET_POSTS, {
    variables: {page: 1},
    context: {
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      },
    },
  });

  useEffect(()=>{
    if(data && data.getPosts) {
      setA(data.getPosts.message);
    }
  },[data]);

  console.log(a);

  return (
    <Write />
  );
};

export default PostContainer;