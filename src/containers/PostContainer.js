import React, { useEffect } from 'react';
import {useQuery} from '@apollo/client';
import Write from '../components/write/Write';
import {GET_POSTS} from '../GraphQL/Queries';

const PostContainer = () => {

  const token = localStorage.getItem("token");

    let page = 1;
    function hello() {
      const {loading, error, data} = useQuery(GET_POSTS, {
        variables: {page},
        context: {
          headers: {
            authorization: token ? `Bearer ${token}` : ""
          },
        },
      });

      if (loading) return console.log("loading...");
      if (error) return console.log("error!");
      
      return (
        console.log(data)
      );
    }

    hello();

  return (
    <Write />
  );
};

export default PostContainer;