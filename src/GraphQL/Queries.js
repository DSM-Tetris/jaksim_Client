import { gql } from 'apollo-boost';

export const GET_POSTS = gql`
  query GetPosts($page: Int!, $categoryId: Int) {
    getPosts(data: {page: $page, categoryId: $categoryId}) {
      ... on GetPosts {
        __typename
        posts {
          title
          contentPreview
          image
          tags {
            tagName
          }
        }
      }
      ... on Unauthorized {
        __typename  
        message
      }
      ... on BadRequest {
        __typename
        message
      }
      ... on NotFoundAnyPost {
        __typename
        message
      }
    }
  }
`