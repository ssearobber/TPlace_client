import React from 'react';
import LogoImg from '../../../image/TPlace.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mediaQuery from '../../../styles/mediaQuery';

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 16px;
`;

const LogoWrapper = styled.div`
  width: 200px;
  height: auto;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 50%;
  height: 50%;
  object-fit: fill;
`;

const ItemWrapper = styled.div`
  display: flex;
`;

const ItemLink = styled(Link)`
  display: block;
  margin: 0 10px;
  text-decoration: none;
  color: inherit;
  font-size: 11px;
  font-weight: 900;
  ${mediaQuery(1)} {
    font-size: 14px;
  }
`;
const HeaderPresenter = ({ isLoggedIn, history, logoutLocalFn }) => {
  return (
    <NavHeader>
      <LogoWrapper onClick={() => history.push('/home')}>
        <Logo src={LogoImg} alt="logo" />
      </LogoWrapper>
      <ItemWrapper>
        {isLoggedIn ? (
          <>
            <ItemLink to="/home" onClick={logoutLocalFn}>
              LOGOUT
            </ItemLink>
          </>
        ) : (
          <>
            <ItemLink to="/signIn">SIGN IN</ItemLink>
            <ItemLink to="/signUp">SIGN UP</ItemLink>
          </>
        )}
      </ItemWrapper>
    </NavHeader>
  );
};

export default HeaderPresenter;
