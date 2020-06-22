import React from 'react';
import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';
import Namsan from '../../image/Namsan.jpg';
import Dongdaemoon from '../../image/Dongdaemoon.jpeg';
import Gyeongbokgung from '../../image/Gyeongbokgung.jpg';
import Hangang from '../../image/Hangang.jpg';
import Gangnam from '../../image/Gangnam.jpeg';

const Container = styled.div`
  width: 100%;
  margin: 80px 0;
  display: flex;
  flex-direction: column;
  ${mediaQuery(2)} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(9, 1fr);
    width: 1000px;
    height: 800px;
    margin: 80px auto;
    grid-gap: 10px;
  }
`;

const HomeItem = styled.div`
  height: 300px;
  position: relative;
  cursor: pointer;
  > img {
    width: 100%;
    height: 100%;
    over-fit: cover;
  }
  > p {
    position: absolute;
    left: 80%;
    top: 10%;
    color: white;
    font-size: 24px;
    font-weight: 900;
  }
`;

const Item1 = styled(HomeItem)`
  ${mediaQuery(2)} {
    height: 100%;
    grid-column: 1 / 3;
    grid-row: 1 / 5;
  }
`;
const Item2 = styled(HomeItem)`
  ${mediaQuery(2)} {
    height: 100%;
    grid-column: 3 / 5;
    grid-row: 1 / 3;
  }
`;
const Item3 = styled(HomeItem)`
  ${mediaQuery(2)} {
    height: 100%;
    grid-column: 3 / 5;
    grid-row: 3 / 5;
  }
`;
const Item4 = styled.div`
  border: 8px solid green;
  margin: 8px 64px;
  padding: 8px;
  > p {
    text-align: center;
  }

  ${mediaQuery(2)} {
    grid-column: 1 / 5;
    grid-row: 5 / 6;
    border: 8px solid green;
    margin: 8px 64px;
    padding: 8px;
    > p {
      text-align: center;
    }
  }
`;
const Item5 = styled(HomeItem)`
  ${mediaQuery(2)} {
    height: 100%;
    grid-column: 1 / 3;
    grid-row: 6 / 10;
  }
`;
const Item6 = styled(HomeItem)`
  ${mediaQuery(2)} {
    height: 100%;
    grid-column: 3 / 5;
    grid-row: 6 / 9;
  }
`;
const Item7 = styled.div`
  text-align: center;
  > span {
    &:first-child {
      color: red;
      font-size: 32px;
      font-weight: 900;
    }
    &:last-child {
      font-size: 24px;
    }
  }
  ${mediaQuery(2)} {
    grid-column: 3 / 5;
    grid-row: 9 / 10;
    padding: 32px 0;
    > span {
      &:first-child {
        color: red;
        font-size: 32px;
        font-weight: 900;
      }
      &:last-child {
        font-size: 24px;
      }
    }
  }
`;

const HomePresenter = ({ history }) => {
  return (
    <Container>
      <Item1 onClick={() => history.push(`/posts`)}>
        <img src={Namsan} alt={'Namsan'} />
        <p>남산</p>
      </Item1>
      <Item2 onClick={() => history.push(`/posts`)}>
        <img src={Dongdaemoon} alt={'Dongdaemoon'} />
        <p>동대문</p>
      </Item2>
      <Item3 onClick={() => history.push(`/posts`)}>
        <img src={Gyeongbokgung} alt={'Gyeongbokgung'} />
        <p>경북궁</p>
      </Item3>
      <Item4>
        <p>Where you want to it, time, find a friend</p>
        <p>that fit you</p>
      </Item4>
      <Item5 onClick={() => history.push(`/posts`)}>
        <img src={Hangang} alt={'Hangang'} />
        <p>한강</p>
      </Item5>
      <Item6 onClick={() => history.push(`/posts`)}>
        <img src={Gangnam} alt={'Gangnam'} />
        <p>강남</p>
      </Item6>
      <Item7>
        <span>SEOUL </span>
        <span>by your side with TPlace</span>
      </Item7>
    </Container>
  );
};

export default HomePresenter;
