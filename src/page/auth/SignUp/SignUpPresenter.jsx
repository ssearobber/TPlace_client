import React from 'react';
import styled from 'styled-components';
import mediaQuery from '../../../styles/mediaQuery';

const SignInWrapper = styled.div`
  width: 100%;
  margin: 40px 0;
  ${mediaQuery(2)} {
    width: 1000px;
    margin: 80px auto;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  width: 100%auto;
  box-sizing: border-box;
  padding: 40px 60px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  height: 20px;
  padding: 32px;
  font-size: 14px;
  font-weight: 900;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background-color: #0d47a1;
  color: white;
  font-size: 16px;
  font-weight: 900;
`;

const SignUpPresenter = ({ handleSubmit, handleChange, formData }) => {
  return (
    <SignInWrapper>
      <Title>SIGN UP</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          type="text"
          value={formData.username}
          name={'username'}
          placeholder={'NAME'}
        />
        <Input
          onChange={handleChange}
          type="text"
          value={formData.email}
          name={'email'}
          placeholder={'EMAIL'}
        />
        <Input
          onChange={handleChange}
          type="password"
          value={formData.password}
          name={'password'}
          placeholder={'PASSWORD'}
        />
        <Button>SIGN UP</Button>
      </Form>
    </SignInWrapper>
  );
};

export default SignUpPresenter;
