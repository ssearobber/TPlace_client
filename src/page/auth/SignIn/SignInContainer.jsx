import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SIGN_IN_USER } from './SignInQuery';
import { SIGN_IN_USER_LOCAL } from '../../../SharedQueries.local';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import SignInPresenter from './SignInPresenter';

const SignInContainer = ({ history }) => {
  const initialState = {
    email: '',
    password: '',
  };
  const [signInLocalFn] = useMutation(SIGN_IN_USER_LOCAL);

  const [signInFn] = useMutation(SIGN_IN_USER, {
    onCompleted({ signIn }) {
      // 로그인 실패
      if (!signIn.success) {
        toast.error(signIn.error);
        return;
      }
      // 로그인 성공
      else {
        toast.success('로그인 성공');
        const TPToken = signIn.data;
        signInLocalFn({
          variables: {
            TPToken: TPToken,
          },
        });
        history.push('/posts');
        return;
      }
    },
  });
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

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
      await signInFn({
        variables: {
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
    <SignInPresenter handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} />
  );
};

export default withRouter(SignInContainer);
