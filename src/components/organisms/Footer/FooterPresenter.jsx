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
          {/* <ListItem>
            <Link href="#">press</Link>
          </ListItem>
          <ListItem>
            <Link href="#">api</Link>
          </ListItem>
          <ListItem>
            <Link href="#">jobs</Link>
          </ListItem>
          <ListItem>
            <Link href="#">privacy</Link>
          </ListItem>
          <ListItem>
            <Link href="#">terms</Link>
          </ListItem>
          <ListItem>
            <Link href="#">directory</Link>
          </ListItem>
          <ListItem>
            <Link href="#">profiles</Link>
          </ListItem>
          <ListItem>
            <Link href="#">hashtags</Link>
          </ListItem>
          <ListItem>
            <Link href="#">language</Link>
          </ListItem> */}
        </List>
        <Copyright>TPlace {new Date().getFullYear()} &copy;</Copyright>
      </Footer>
    </Wrapper>
  );
};

export default FooterPresenter;
