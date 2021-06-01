import { gql } from '@apollo/client';

export const POST_FIELDS = gql`
  fragment PostFields on GetPosts {
    posts {
      title
      contentPreview
      image
      tags {
        tagName
      }
    }
  }
`