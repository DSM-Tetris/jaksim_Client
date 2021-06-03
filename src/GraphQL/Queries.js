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

export const GET_POST = gql`
  query GetPost($postId: Float!) {
    getPost(postId: $postId) {
      ... on GetPost {
        message
        post {
          id
          title
          content
          image
          createdAt
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
      ... on ForbiddenPost {
        message
      }
      ... on NotFoundPost {
        message
      }
    }
  }
`

export const GET_PERCENTAGE_OF_BATTERY = gql`
  query {getPercentageOfBattery {
      ... on GetPercentageOfBattery {
        percentageOfBattery,
        message
      }
      ... on Unauthorized {
        message
      }
    }
  }
`