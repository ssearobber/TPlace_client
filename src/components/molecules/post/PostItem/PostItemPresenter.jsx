import React from 'react';
import styled from 'styled-components';
import { Views } from '../../../../styles/Icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  box-sizing: border-box;
  padding-bottom: 32px;
  border-radius: 5px;
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;
  &:hover {
    > img {
      opacity: 0.4;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.imgUrl && props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

const DataBox = styled.div`
  width: 100%;
  padding: 32px 0;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, rgba(236, 240, 241, 0.1) 0%, rgba(44, 62, 80, 0.51) 35%);
  color: white;
  > div {
    margin: 8px 0;
  }
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 22px;
`;

const Description = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const CreatedAt = styled.div`
  font-weight: 600;
  font-size: 10px;
  margin: 2px 0;
`;

const ViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostItem = ({ history, id, title, description, view, imgUrl, createdAt }) => {
  return (
    <Container onClick={() => history.push(`/post/${id}`)}>
      {/* <DataBox> */}
      <Image src={imgUrl} alt="imgUrl" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <CreatedAt>{createdAt}</CreatedAt>
      <ViewWrapper>
        <div>{view}</div>
        <Views />
      </ViewWrapper>

      {/* </DataBox> */}
    </Container>
  );
};

export default PostItem;
