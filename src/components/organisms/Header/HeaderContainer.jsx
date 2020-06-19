import React from 'react';
import { withRouter } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { LOG_OUT_USER_LOCAL } from '../../../SharedQueries.local';
import { toast } from 'react-toastify';
import HeaderPresenter from './HeaderPresenter';

const HeaderContainer = ({ isLoggedIn, history }) => {
  const [logoutLocalFn] = useMutation(LOG_OUT_USER_LOCAL, {
    onCompleted() {
      toast.info('로그아웃되었습니다.');
    },
  });
  return (
    <HeaderPresenter isLoggedIn={isLoggedIn} history={history} logoutLocalFn={logoutLocalFn} />
  );
};

export default withRouter(HeaderContainer);
