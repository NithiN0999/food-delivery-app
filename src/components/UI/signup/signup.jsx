import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userInfo, setUserInfo] = useState({
    userName: '',
    number: '',
    address: '',
    email: '',
    password: '',
  });

  const onSubmit = data => {
    setUserInfo(data);
    handleFormSubmit(data);
  };

  const handleFormSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/api/postusers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      if (response.ok) {
        console.log('Registration successful:', responseData);
      } else {
        console.error('Registration failed:', responseData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('userName', { required: true })} placeholder="Username" />
        {errors.userName && <Error>Username is required</Error>}
        
        <Input {...register('number', { required: true })} placeholder="Number" />
        {errors.number && <Error>Number is required</Error>}
        
        <Input {...register('address', { required: true })} placeholder="Address" />
        {errors.address && <Error>Address is required</Error>}
        
        <Input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" />
        {errors.email && <Error>Valid email is required</Error>}
        
        <Input {...register('password', { required: true })} type="password" placeholder="Password" />
        {errors.password && <Error>Password is required</Error>}
        
        <Button type="submit">Sign Up</Button>

      </Form>
    </FormWrapper>
  );
};

export default SignupForm;
