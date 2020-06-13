import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { LOG_OUT_USER_LOCAL } from '../../../SharedQueries.local';
import Logo from '../../../image/TPlace.png';
import { toast } from 'react-toastify';
import styled from 'styled-components';
// import mediaQuery from '../../../styles/mediaQuery';

const navHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 16px;
`;

const HeaderContainer = ({ isLoggedIn, history }) => {
  const [logoutLocalFn] = useMutation(LOG_OUT_USER_LOCAL, {
    onCompleted() {
      toast.info('로그아웃되었습니다.');
    },
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '0 16px',
      }}
    >
      <div
        style={{
          width: '200px',
          height: 'auto',
          cursor: 'pointer',
        }}
        onClick={() => history.push('/posts')}
      >
        <img
          src={Logo}
          alt="logo"
          style={{
            width: '50%',
            height: '50%',
            objectFit: 'fill',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        {isLoggedIn ? (
          <>
            {/* <Link style={LinkStyle} to="/posts">
              POST
            </Link> */}
            <Link style={LinkStyle} to="/posts" onClick={logoutLocalFn}>
              LOGOUT
            </Link>
          </>
        ) : (
          <>
            {/* <Link style={LinkStyle} to="/posts">
              POST
            </Link> */}
            <Link style={LinkStyle} to="/signIn">
              SIGN IN
            </Link>
            <Link style={LinkStyle} to="/signUp">
              SIGN UP
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
const LinkStyle = {
  display: 'block',
  margin: '0 10px',
  textDecoration: 'none',
  color: 'inherit',
  fontSize: '14px',
  fontWeight: '900',
};
export default withRouter(HeaderContainer);
