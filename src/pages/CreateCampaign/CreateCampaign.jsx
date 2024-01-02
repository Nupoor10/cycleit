import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuthContext } from '../../hooks/useAuthContext';
import "./CreateCampaign.css"
const apiURL = import.meta.env.VITE_BACKEND_URL;

const CreateCampaign = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        goalAmount: '',
      });
      const navigate = useNavigate();
      const { user } = useAuthContext()
      const { id } = useParams();

      useEffect(() => {
        const fetchData = async() => {
            try {
                if(user && id) {
                  const config = {
                    headers: {
                      Authorization: `Bearer ${user?.accessToken}`,
                    },
                  };
                  const response = await axios.get(`${apiURL}/donation/${id}`, config);
                  if(response && response.status == 200) {
                    setFormData({
                      ...formData,
                      title: response.data.data.title,
                      description: response.data.data.description,
                      goalAmount: response.data.data.goalAmount,
                    });
                  }
                }
              } catch(error) {
                console.log(error);
                toast.error(error?.message);
              }
        }
    
        fetchData()
    }, [user, id])
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = async() => {
        try {
            if(user) {
              const config = {
                headers: {
                  Authorization: `Bearer ${user?.accessToken}`,
                },
              };
              if(id) {
                const response = await axios.put(`${apiURL}/donation/update/${id}`, formData, config);
                if(response && response.status == 200) {
                  toast.success('Campaign updated successfully');
                  navigate('/profile');
                }
              } else {
                const response = await axios.post(`${apiURL}/donation/add/`, formData, config);
                if(response && response.status == 201) {
                  toast.success('Campaign added successfully');
                  navigate('/profile');
                }
              }
            }
          } catch(error) {
            console.log(error);
            toast.error(error?.message);
          }
      }
  return (
    <div className='create__page__container'>
        <div className='create__page__body'>
        <h2>
          Set Up your fundraiser in a single step!
        </h2>
        <div className='campaign__form'>
          <p>Title</p>
          <input
            type='text'
            name='title'
            placeholder='Enter Title'
            value={formData.title}
            onChange={(e) => handleInputChange(e)}
          />
          <p>Description</p>
          <textarea
            rows={7}
            name='description'
            placeholder='Enter Description'
            value={formData.description}
            onChange={(e) => handleInputChange(e)}
          />
          <p>Goal Amount</p>
          <input
            type='text'
            name='goalAmount'
            placeholder='Enter goal amount'
            value={formData.goalAmount}
            onChange={(e) => handleInputChange(e)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>

  )
}

export default CreateCampaign