import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import './Register.css';
const apiURL = import.meta.env.VITE_BACKEND_URL;

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
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
        `${apiURL}/user/register`,
        formData
      );
      if (response && response.status === 201) {
        toast.success('Registration Successful  !!!');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div className='register__page__container'>
      <h1>Cyle♻️IT</h1>
      <div className='register__page__body'>
        <h2 className='register__heading'>
          Create your free account to a greener earth!
        </h2>
        <div className='register__form'>
          <p>User Name</p>
          <input
            type='text'
            name='username'
            placeholder='Enter User Name'
            value={formData.username}
            onChange={(e) => handleInputChange(e)}
          />
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
          <button onClick={handleSubmit}>Register</button>
        </div>
      </div>
      <div className='register__page__body'>
        <p>
          Already have an account? <Link to='/'>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
