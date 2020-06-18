import { gql } from 'apollo-boost';

export const IS_LOGGED_IN = gql`
  {
    auth {
      isLoggedIn @client
    }
  }
`;

export const SIGN_IN_USER_LOCAL = gql`
  mutation signInLocal($TPToken: String!) {
    signInLocal(TPToken: $TPToken) @client
  }
`;

export const LOG_OUT_USER_LOCAL = gql`
  mutation logoutLocal {
    logoutLocal @client
  }
`;
