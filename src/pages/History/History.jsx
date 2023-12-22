import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';
import "./History.css"
const apiURL = import.meta.env.VITE_BACKEND_URL;

const History = () => {

    const { user } = useAuthContext();
    const [recycledHistory, setRecycledHistory] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
          try {
            if(user) {
              const config = {
                headers: {
                  Authorization: `Bearer ${user?.accessToken}`
                }
              };
              const response = await axios.get(`${apiURL}/recycle/all`, config);
              if (response && response.status === 200 && response.data) {
                setRecycledHistory(response.data.data);
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
    <div className='history__page__container'>
      <h1>Recycled Item History 🗃️</h1>
        {recycledHistory.length > 0 && (
            recycledHistory.map((item, index) => {
                return <div className='history__card' key={index}>
                    <h1>📦&nbsp;{item.title}</h1>
                    <h2> 🌱&nbsp;{item.category.category}</h2>
                    <h2>🎖️&nbsp;{item.category.points}</h2>
                </div>
            })
        )}
    </div>
  )
}

export default History