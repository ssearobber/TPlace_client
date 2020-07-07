import { gql } from 'apollo-boost';

export const GET_POSTS = gql`
  query {
    getPosts {
      success
      error
      data {
        id
        title
        description
        view
        imgUrl
        createdAt
        updatedAt
      }
    }
  }
`;
