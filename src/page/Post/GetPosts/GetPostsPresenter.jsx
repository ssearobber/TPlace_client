import React from 'react';
import PostItem from '../../../components/molecules/post/PostItem';
import styled from 'styled-components';
import mediaQuery from '../../../styles/mediaQuery';

const Container = styled.div`
  width: 100%;
  margin: 80px 0;
  ${mediaQuery(2)} {
    width: 1000px;
    margin: 80px auto;
  }
  box-sizing: border-box;
  padding: 0 16px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 32px;
  ${mediaQuery(2)} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    width: 1000px;
    margin: 80px auto;
  }
`;

const GetPostsPresenter = ({ posts, history }) => {
  return (
    <Container>
      <GridContainer>
        {posts && posts.map((post) => <PostItem key={post.id} history={history} {...post} />)}
      </GridContainer>
    </Container>
  );
};

export default GetPostsPresenter;
