import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';
import './Login.css';
const apiURL = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
  const { dispatch } = useAuthContext();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${apiURL}/user/login`,
        formData
      );
      if (response && response.status === 200) {
        const userData = {
          accessToken: response.data.jwtToken,
          name: response.data.exisitingUser.username,
        };
        dispatch({ type: 'LOGIN', payload: userData });
        localStorage.setItem('User', JSON.stringify(userData));
        toast.success('Log In Successful !!!');
        setTimeout(() => {
          navigate('/profile');
        }, 2000);
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div className='login__page__container'>
      <h1>Cyle♻️IT</h1>
      <div className='login__page__body'>
        <h2 className='login__heading'>Welcome Back</h2>
        <div className='login__form'>
          <p>E-mail Address</p>
          <input
            type='text'
            name='email'
            placeholder='Enter Email'
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
          />
          <p>Password</p>
          <input
            type='password'
            name='password'
            placeholder='Enter Password'
            value={formData.password}
            onChange={(e) => handleInputChange(e)}
          />
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
      <div className='login__page__body'>
        <p>
          Don't have an account yet? <Link to='/register'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
