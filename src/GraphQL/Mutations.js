import { gql } from 'apollo-boost';

export const CREATE_USER_MUTATION = gql`
  mutation signup(
    $id: String!
    $password: String!
    $email: String!
    $nickname: String!
  ){
    signup(
      id: $id
      password: $password
      email: $email
      nickname: $nickname
    )
  }
`;