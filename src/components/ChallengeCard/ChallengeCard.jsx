import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useAuthContext } from '../../hooks/useAuthContext';
import './ChallengeCard.css'
const apiURL = import.meta.env.VITE_BACKEND_URL;

const ChallengeCard = ({id, title, description, difficultyLevel, points, isEnrolled, isCompleted}) => {

  const { user } = useAuthContext();

  const handleEnroll = async() => {
    try {
      if(user && id) {
        const config = {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`
            }
           };
        const response = await axios.post(`${apiURL}/enrolled/add`,
        {
          challengeID : id
        }, config);
        if (response && response.status === 201) {
          toast.success('Enrolled Successfully !!!')
        }
      }
    } catch(error) {
      console.log(error);
      toast.error(error?.message);
    }
  }

  const handleUnEnroll = async() => {
    try {
      if(user && id) {
        const config = {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`
            }
           };
        const response = await axios.delete(`${apiURL}/enrolled/${id}`, config);
        if (response && response.status === 200) {
          toast.success('UnEnrolled Successfully !!!')
        }
      }
    } catch(error) {
      console.log(error);
      toast.error(error?.message);
    }
  }

  const handleMarkComplete = async() => {
    try {
      if(user && id) {
        const config = {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`
            }
           };
        const response = await axios.put(`${apiURL}/enrolled/update/${id}`, {} ,config);
        if (response && response.status === 200) {
          toast.success('Marked Completed Successfully !!!')
        }
      }
    } catch(error) {
      console.log(error);
      toast.error(error?.message);
    }
  }
  
  return (
    <div className='challenge__card__container'>
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
            <span>🎚️ {difficultyLevel}</span>
            <span>🌟 {points}</span>
        </div>
        <div>
            {isEnrolled ? <button className='secondary__btn' onClick={handleUnEnroll}>UnEnroll</button> : <button className='secondary__btn' onClick={handleEnroll}>Enroll</button>}
            {(isEnrolled && !isCompleted) && <button className='secondary__btn' onClick={handleMarkComplete}>Mark as complete</button>}
        </div>
    </div>
  )
}

export default ChallengeCard