import { gql } from 'apollo-boost';

export const SIGN_IN_USER = gql`
  mutation($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      success
      error
      data
    }
  }
`;
