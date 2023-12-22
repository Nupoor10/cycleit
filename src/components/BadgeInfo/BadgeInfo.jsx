import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuthContext } from '../../hooks/useAuthContext';
import BadgeCard from '../BadgeCard/BadgeCard';
import "./BadgeInfo.css"
const apiURL = import.meta.env.VITE_BACKEND_URL;

const BadgeInfo = () => {

    const [allBadges, setAllBadges] = useState([]);
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
              const response = await axios.get(`${apiURL}/badge/all`, config);
              if (response && response.status === 200 && response.data.data) {
                setAllBadges(response.data.data);
              }
            }
          } catch(error) {
            console.log(error);
            toast.error(error?.message);
          }
        }
  
        fetchData();
      }, [user]);

  return (
    <div className='allbadge__info__modal'>
      <p>Here are all the badges you can earn 🌟🎆✨</p>
      <p>Keep racking up your points by recycling and completing challenges to be awarded the ultimate honor!</p>
        <div className='allbadge__card__container'>
          {allBadges?.map((item,index) => {
            return <BadgeCard key={index} name={item.name} img={item.img} points={item.points}/>
          })}
        </div>
    </div>
  )
}

export default BadgeInfo