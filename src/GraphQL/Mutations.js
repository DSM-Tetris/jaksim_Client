import { gql } from 'apollo-boost';

export const CREATE_USER_MUTATION = gql`
  mutation signup(
    $username: String!
    $password: String!
    $email: String!
    $nickname: String!
  ){
    signup(
      username: $username
      password: $password
      email: $email
      nickname: $nickname
    )
  }
`;