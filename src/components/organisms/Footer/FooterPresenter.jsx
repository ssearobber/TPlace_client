import React from 'react';
import styled from 'styled-components';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  ${mediaQuery(2)} {
    width: 1000px;
    margin: 80px auto;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  margin: 50px 0px;
  padding: 0 16px;
  overflow: hidden;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Link = styled.a`
  color: ${(props) => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
  color: ${(props) => props.theme.darkGreyColor};
`;

const FooterPresenter = () => {
  return (
    <Wrapper>
      <Footer>
        <List>
          <ListItem>
            <Link href="#">about us</Link>
          </ListItem>
          <ListItem>
            <Link href="#">support</Link>
          </ListItem>
        </List>
        <Copyright>TPlace {new Date().getFullYear()} &copy;</Copyright>
      </Footer>
    </Wrapper>
  );
};

export default FooterPresenter;
