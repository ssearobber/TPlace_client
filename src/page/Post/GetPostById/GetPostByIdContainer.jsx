import React from 'react';
import useInput from '../../../hooks/useInput';
import GetPostByIdPresenter from './GetPostByIdPresenter';
import { GET_POSTS } from '../GetPosts/GetPostsQuery';
import { GET_POST_BY_ID, DELETE_POST_BY_ID, CREATE_POST_COMMENT } from './GetPostByIdQuery';
import { GET_ME } from '../../../SharedQueries';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

const GetPostByIdContainer = ({
  match: {
    params: { postId },
  },
  history,
  isLoggedIn,
}) => {
  const comment = useInput('');

  const { data, loading, error } = useQuery(GET_POST_BY_ID, {
    variables: {
      postId,
    },
  });

  const { data: userData } = useQuery(GET_ME);

  const [deletePostByIdFn] = useMutation(DELETE_POST_BY_ID, {
    onCompleted({ deletePostById }) {
      const { success, error } = deletePostById;
      if (error) {
        alert(error.message);
      } else if (success) {
        alert('정상적으로 포스트가 삭제되었습니다. ');
      }
    },
    refetchQueries: [{ query: GET_POSTS }],
  });

  const [createPostCommentFn] = useMutation(CREATE_POST_COMMENT, {
    variables: {
      postId: postId,
      text: comment.value,
    },
    onCompleted({ createPostComment }) {
      const { success, error, data } = createPostComment;
      console.log(data);
      if (error) {
        alert(error.message);
      } else if (success) {
        comment.setValue('');
      }
    },
    refetchQueries: [{ query: GET_POST_BY_ID, variables: { postId: postId } }],
  });

  const handleGoBack = () => {
    history.goBack();
  };

  const handleUpdate = (id) => {
    history.push(`/post/${id}/update`);
  };

  const handleDelete = (id) => {
    if (window.confirm(`${id}번 포스트를 삭제하시겠습니까? `)) {
      deletePostByIdFn({
        variables: {
          postId: id,
        },
      });
      history.push('/posts');
    }
  };

  const onKeyPress = async (event) => {
    const { which } = event;
    if (which === 13) {
      event.preventDefault();
      try {
        createPostCommentFn();
      } catch {
        toast.error('Cant send comment');
      }
    }
  };

  if (error) return <>error</>;
  if (loading) return <>loading...</>;

  const post = data.getPostById.data;

  let currentUser = {};
  if (userData) {
    currentUser = userData.getMe.data;
  }

  return (
    <>
      <GetPostByIdPresenter
        handleGoBack={handleGoBack}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        currentUser={currentUser}
        newComment={comment}
        onKeyPress={onKeyPress}
        {...post}
        isLoggedIn={isLoggedIn}
      />
    </>
  );
};

export default withRouter(GetPostByIdContainer);
