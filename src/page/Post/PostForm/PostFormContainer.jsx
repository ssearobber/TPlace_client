import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreatePostPresenter from './PostFormPresenter';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_POST, UPDATE_POST_BY_ID } from './PostFormQuery';
import { GET_POSTS } from '../GetPosts/GetPostsQuery';
import { GET_POST_BY_ID } from '../GetPostById/GetPostByIdQuery';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

const PostFormContainer = ({ history, match }) => {
  const initialState = {
    title: '',
    description: '',
    imgUrl: '',
  };
  const [formData, setFormData] = useState(initialState);
  const [formImage, setFormImage] = useState('');

  const { loading, error, data } = useQuery(GET_POST_BY_ID, {
    skip: match.params.postId ? false : true,
    variables: {
      postId: match.params.postId,
    },
  });
  // 위의 useQuery의 skip이랑 onCompleted가 잘 작동하지 않아 임시적으로 useEffect로 작성
  useEffect(() => {
    if (data) {
      if (data.getPostById.data.error) {
        toast.error(data.getPostById.data.error.message);
      } else if (data.getPostById.success) {
        setFormData({
          ...formData,
          title: data.getPostById.data.title,
          description: data.getPostById.data.description,
          imgUrl: data.getPostById.data.imgUrl,
        });
      }
    }
  }, []);

  const [createPostFn] = useMutation(CREATE_POST, {
    variables: {
      title: formData.title,
      description: formData.description,
      imgUrl: formData.imgUrl
        ? formData.imgUrl
        : 'https://b-rise.jp/wp-content/themes/b-rise/images/sample_img.gif',
    },
    onCompleted({ createPost: { success, error, data } }) {
      if (error) {
        toast.error(error);
      } else if (success) {
        toast.info('포스트가 작성되었습니다. ');
        history.push('/posts');
      }
    },
    refetchQueries: [{ query: GET_POSTS }],
  });

  const [updatePostByIdFn] = useMutation(UPDATE_POST_BY_ID, {
    variables: {
      title: formData.title,
      description: formData.description,
      imgUrl: formData.imgUrl,
      postId: match.params.postId,
    },
    onCompleted({ updatePostById: { success, error, data } }) {
      if (error) {
        toast.error(error);
      } else if (success) {
        toast.info('포스트가 수정되었습니다. ');
        history.push(`/post/${match.params.postId}`);
      }
    },
    refetchQueries: [{ query: GET_POST_BY_ID, variables: { postId: match.params.postId } }],
  });

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onDrop = async (image) => {
    setFormImage(image);
  };
  console.log(formImage[0]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataImg = new FormData();
    formDataImg.append('file', formImage[0]);

    // http://localhost:4000/api/upload
    try {
      const {
        data: { location },
      } = await axios.post('https://tplace.herokuapp.com/api/upload', formDataImg, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(location);
      setFormData({ ...formData, imgUrl: location });
    } catch (e) {
      alert(e);
    }

    if (match.params.postId) {
      updatePostByIdFn();
    } else {
      if (formData.title.length === 0 || formData.description.length === 0) {
        toast.error('title , description, imgUrl 을 확인해주세요. ');
        return;
      } else {
        createPostFn();
        return;
      }
    }
  };

  const handleGoBack = (event) => {
    event.preventDefault();
    history.push('/posts');
  };

  // if (error) return <></>;
  // if (success) return <></>;

  return (
    <div>
      <CreatePostPresenter
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleGoBack={handleGoBack}
        formData={formData}
        isUpdate={match.params.postId}
        onDrop={onDrop}
      />
    </div>
  );
};

export default withRouter(PostFormContainer);
