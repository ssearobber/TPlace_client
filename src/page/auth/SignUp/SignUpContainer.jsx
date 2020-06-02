import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SIGN_UP_USER } from './SignUpQuery';
import { SIGN_IN_USER_LOCAL } from '../../../SharedQueries.local';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

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
        const token = signUp.data;
        signInLocalFn({
          variables: {
            token: token,
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
    <div>
      <h1 style={{ textAlign: 'center' }}>회원가입</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: '40px 60px',
        }}
      >
        <input
          onChange={handleChange}
          type="text"
          style={inputStyle}
          value={username}
          name={'username'}
          placeholder={'NAME'}
        />
        <input
          onChange={handleChange}
          type="text"
          style={inputStyle}
          value={email}
          name={'email'}
          placeholder={'EMAIL'}
        />
        <input
          onChange={handleChange}
          type="password"
          style={inputStyle}
          value={password}
          name={'password'}
          placeholder={'PASSWORD'}
        />
        <button style={buttonStyle}>회원가입</button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  marginBottom: '10px',
  height: '30px',
  padding: '32px',
  fontSize: '14px',
  fontWeight: '900',
  boxSizing: 'border-box',
};

const buttonStyle = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '20px',
  backgroundColor: 'black',
  color: 'white',
  fontSize: '16px',
  fontWeight: '900',
};

export default withRouter(SignUpContainer);
