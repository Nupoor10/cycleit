import React, { useState, useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard'
import { useAuthContext } from '../../hooks/useAuthContext';
import './Challenges.css'
const apiURL = import.meta.env.VITE_BACKEND_URL;

const Challenges = () => {

    const [userChallenges, setUserChallenges] = useState([]);
    const [allChallenges, setAllChallenges] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchData = async() => {
          try {
            if(user) {
              const config = {
                headers: {
                  Authorization: `Bearer ${user?.accessToken}`
                }
              };
              const response = await axios.get(`${apiURL}/enrolled/all`, config);
              if (response && response.status === 200 && response.data.data) {
                setUserChallenges(response.data.data);
              }
            }
          } catch(error) {
            console.log(error);
            toast.error(error?.message);
          }
        }
  
        fetchData();

        const refreshInterval = setInterval(() => {
            fetchData();
        }, 10000)

        return () => {
            clearInterval(refreshInterval);
        };
      }, [user]);

    useEffect(() => {
        const fetchData = async() => {
          try {
            if(user) {
              const config = {
                headers: {
                  Authorization: `Bearer ${user?.accessToken}`
                }
              };
              const response = await axios.get(`${apiURL}/challenge/all`, config);
              if (response && response.status === 200 && response.data.data) {
                setAllChallenges(response.data.data);
              }
            }
          } catch(error) {
            console.log(error);
            toast.error(error?.message);
          }
        }

        fetchData();
  
        const refreshInterval = setInterval(() => {
            fetchData();
        }, 10000)

        return () => {
            clearInterval(refreshInterval);
        };
      }, [user]);
  
  return (
    <div className='challenges__page__container'>
      <div>
        <h1>Challenge Yourself 💪</h1>
      </div>
      <div>
        <h2>Your Enrolled Challenges ➡️</h2>
      </div>
      <div className='challenges__div__container'>
            {(userChallenges.length > 0) ? userChallenges?.map((item,index) => {
              return <ChallengeCard key={index} title={item.challenge.title} description={item.challenge.description} difficultyLevel={item.challenge.difficultyLevel} points={item.challenge.points} id={item._id} isEnrolled={true} isCompleted={item.completed}/>
            }) : "You haven't enrolled in any challenges yet.Explore Below !!"}
      </div>
      <div>
        <h2>Explore More Challenges ➡️</h2>
      </div>
      <div className='challenges__div__container'>
            {allChallenges?.map((item,index) => {
              return <ChallengeCard key={index} title={item.title} description={item.description} difficultyLevel={item.difficultyLevel} points={item.points} id={item._id} isEnrolled={false}/>
            })}
      </div>
    </div>
  )
}

export default Challenges