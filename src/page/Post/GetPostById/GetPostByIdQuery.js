import { gql } from 'apollo-boost';

export const GET_POST_BY_ID = gql`
  query getPostById($postId: ID!) {
    getPostById(postId: $postId) {
      success
      error
      data {
        id
        title
        description
        imgUrl
        user {
          id
          username
          email
        }
        postComments {
          id
          text
          user {
            id
            username
            email
          }
        }
      }
    }
  }
`;

export const DELETE_POST_BY_ID = gql`
  mutation DeletePostById($postId: ID!) {
    deletePostById(postId: $postId) {
      success
      error
    }
  }
`;

export const CREATE_POST_COMMENT = gql`
  mutation createPostComment($postId: ID!, $text: String!) {
    createPostComment(postId: $postId, text: $text) {
      success
      error
      data {
        id
        text
        user {
          id
          username
        }
      }
    }
  }
`;
