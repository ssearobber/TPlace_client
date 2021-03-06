import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import mediaQuery from '../../../styles/mediaQuery';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
  margin: 80px 0;
  ${mediaQuery(2)} {
    width: 1000px;
    margin: 80px auto;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 640px;
  background-image: url(${(props) => props.imgUrl && props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 32px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 10px 10px 15px -9px rgba(0, 0, 0, 0.43);
  transition: all 1s ease;
  position: relative;
`;

const DataBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  > div {
    margin: 8px 0;
  }
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 22px;
`;

const Author = styled.div`
  font-weight: 600;
  font-size: 12px;
  margin: 2px 0;
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

const ButtonBox = styled.div`
  margin: 64px 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DefaultButton = styled.div`
  cursor: pointer;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 16px 24px;
  font-weight: 900;
  box-shadow: 10px 10px 15px -9px rgba(0, 0, 0, 0.43);
  background-color: #34495e;
  color: #ffffff;
  transition: all 0.2s ease;
  margin: 0 16px;
  &:hover {
    background-color: #182223;
  }
`;

const UpdateButton = styled(DefaultButton)`
  color: #ffffff;
  margin: 0 16px;
  background-color: #3498db;
  &:hover {
    background-color: #2980b9;
  }
`;

const DeleteButton = styled(DefaultButton)`
  color: #ffffff;
  margin: 0 16px;
  background-color: #e74c3c;
  &:hover {
    background-color: #c0392b;
  }
`;

const Comments = styled.ul`
  margin-top: 10px;
`;

const Comment = styled.li`
  margin-bottom: 7px;
  span {
    margin-right: 5px;
  }
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const FatText = styled.span`
  font-weight: 700;
`;

const GetPostByIdPresenter = ({
  handleGoBack,
  handleUpdate,
  handleDelete,
  id,
  title,
  description,
  imgUrl,
  user,
  createdAt,
  currentUser,
  postComments,
  newComment,
  onKeyPress,
  isLoggedIn,
}) => {
  return (
    <Container>
      <ImageBox imgUrl={imgUrl} />
      <DataBox>
        <Title>{title}</Title>
        <Author>{user && user.username}</Author>
        <Description>{description}</Description>
        {/** todo */}
        <CreatedAt>{createdAt}</CreatedAt>
      </DataBox>
      <ButtonBox>
        <DefaultButton onClick={handleGoBack}>뒤로가기</DefaultButton>
        {isLoggedIn && currentUser && user && currentUser.id === user.id && (
          <>
            <UpdateButton onClick={() => handleUpdate(id)}>포스트수정</UpdateButton>
            <DeleteButton onClick={() => handleDelete(id)}>포스트삭제</DeleteButton>
          </>
        )}
      </ButtonBox>
      {postComments && (
        <Comments>
          {postComments.map((postComment) => (
            <Comment key={postComment.id}>
              <FatText>{postComment.user.username}</FatText>
              {postComment.text}
            </Comment>
          ))}
        </Comments>
      )}
      <Textarea
        onKeyPress={onKeyPress}
        placeholder={'Add a comment...'}
        value={newComment.value}
        onChange={newComment.onChange}
      />
    </Container>
  );
};
export default GetPostByIdPresenter;
