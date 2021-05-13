import React from 'react';
import {useQuery} from '@apollo/client'
import Write from '../components/write/Write';
import {getToken} from '../lib/token/GetToken';
import {GET_POSTS} from '../GraphQL/Queries';

const PostContainer = () => {
  const {data, loading, refetch, fetchMore} = useQuery(GET_POSTS,{
    variables: {
      page: 1,
    }
  });

  console.log(data);

  return (
    <Write />
  );
};

export default PostContainer;