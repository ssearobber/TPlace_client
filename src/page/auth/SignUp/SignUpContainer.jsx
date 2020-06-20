import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SIGN_UP_USER } from './SignUpQuery';
import { SIGN_IN_USER_LOCAL } from '../../../SharedQueries.local';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import SignUpPresenter from './SignUpPresenter';

const SignUpContainer = ({ history }) => {
  const initialState = {
    username: '',
    email: '',
    password: '',
  };

  const [signInLocalFn] = useMutation(SIGN_IN_USER_LOCAL);
  const [signUpFn] = useMutation(SIGN_UP_USER, {
    onCompleted({ signUp }) {
      // 회원가입 실패
      if (!signUp.success) {
        toast.error(signUp.error);
        return;
      }
      // 회원가입 성공
      else {
        const TPToken = signUp.data;
        signInLocalFn({
          variables: {
            TPToken: TPToken,
          },
        });
        toast.success('회원가입 성공');
        history.push('/posts');
        return;
      }
    },
  });
  const [formData, setFormData] = useState(initialState);
  const { username, email, password } = formData;

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await signUpFn({
        variables: {
          username: username,
          email: email,
          password: password,
        },
      });
      setFormData(initialState);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SignUpPresenter handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} />
  );
};

export default withRouter(SignUpContainer);
