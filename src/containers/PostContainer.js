import React, {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import Write from '../components/write/Write';
import {GET_POSTS} from '../GraphQL/Queries';

const PostContainer = () => {
  const [a,setA] = useState({});
  const token = localStorage.getItem("token");

  const {loading, error, data} = useQuery(GET_POSTS, {
    variables: {page: 1, categoryId: null},
    context: {
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      },
    },
  });

  useEffect(()=>{
    if(data) {
      setA(data.getPosts.__typename);
    }
  },[data]);

  return (
    <Write data={data && data.getPosts}/>
  );
};

export default PostContainer;