import { gql } from 'apollo-boost';

export const GET_POSTS = gql`
  query GetPosts($page: Float!, $categoryId: Int) {
    getPosts(data: {page: $page, categoryId: $categoryId}) {
      ... on GetPosts {
        posts {
          __typename,
          id,
          title,
          contentPreview,
          image,
          tags {
            tagName
          }
        }
      }
      ... on Unauthorized {
        __typename,
        message
      }
      ... on NotFoundPost {
        __typename,
        message
      }
    }
  }
`