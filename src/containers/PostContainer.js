import React from 'react';
import {useQuery} from '@apollo/client';
import Write from '../components/write/Write';
import {GET_POSTS} from '../GraphQL/Queries';

const PostContainer = () => {
    let page = 1;
    function hello() {
      const {loading, error, data} = useQuery(GET_POSTS, {
        variables: {page},
        onCompleted: (data) => {
          // console.log(data.getPosts.__typename);
        }
      });
    }

    hello();

  return (
    <Write />
  );
};

export default PostContainer;