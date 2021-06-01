import { gql } from 'apollo-boost';

export const GET_POSTS = gql`
  query GetPosts($page: Int!, $categoryId: Int) {
    getPosts(data: {page: $page, categoryId: $categoryId}) {
      ... on GetPosts {
        message
        posts {
          id
					title
	        contentPreview
	        image
	        tags {
						tagName
	        }
	      }
      }
      ... on BadRequest {
        message
      }
      ... on Unauthorized {
        message
      }
      ... on NotFoundAnyPost {
        message
      }
    }
  }
`