import React from 'react';
import withRouter from 'react-router-dom';
import HomePresenter from './HomePresenter';

const HomeContainer = ({ history }) => {
  return <HomePresenter history={history} />;
};

export default withRouter(HomeContainer);
