import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';
import { GET_POSTS } from './GetPostsQuery';
import GetPostsPresenter from './GetPostsPresenter';

const GetPostsContainer = ({ history, isLoggedIn }) => {
  const { loading, error, data } = useQuery(GET_POSTS);
  let posts;
  if (loading) return <>loading...</>;
  if (error) return <>error</>;
  if (data) {
    // 여기서 data가 처음에 undefined됨 나중에 수정
    posts = data.getPosts.data;
  }

  return <GetPostsPresenter posts={posts} history={history} isLoggedIn={isLoggedIn} />;
};

export default withRouter(GetPostsContainer);
