import { gql } from 'apollo-boost';

export const CREATE_USER_MUTATION = gql`
mutation Signup($username: String!, $password: String!, $nickname: String!, $email: String!, $authCode: String!) {
  signup( data: {username: $username, password: $password, email: $email, nickname: $nickname, authCode: $authCode }) {
    __typename
  }
}
`

export const EMAIL = gql`
mutation SendVerificationEmail($email: String!) {
  sendVerificationEmail(email: $email) {
    __typename
  }
}
`