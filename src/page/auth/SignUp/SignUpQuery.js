import { gql } from 'apollo-boost';

export const SIGN_UP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      success
      error
      data
    }
  }
`;
