import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';
import './Leaderboard.css'
const apiURL = import.meta.env.VITE_BACKEND_URL;

const Leaderboard = () => {
    const [leaderboardStats, setLeaderboardStats] = useState([]);
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
              const response = await axios.get(`${apiURL}/user/leaderboard`, config);
              console.log(response);
              if (response && response.status === 200 && response.data.data) {
                setLeaderboardStats(response.data.data);
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
    <div className='leaderboard__page__container'>
        <table>
            <caption>Leaderboard</caption>
            <thead>
                <tr>
                <th scope="col">Rank</th>
                <th scope="col">User</th>
                <th scope="col">Points Earned</th>
                </tr>
            </thead> 
            <tbody>
                {console.log(leaderboardStats)}
                {leaderboardStats.length > 0 && leaderboardStats.map((item, index) => {
                    return (<tr key={index}>
                        {console.log(item)}
                        <td id='rank'><span>🏅{item?.rank}</span></td>
                        <td id='user'><span><img src='https://i.ibb.co/XJMxTWF/Smiling-Girl-Black-for-T-Shirt1.png' alt='user_avatar'></img> &nbsp; {item?.user}</span></td>
                        <td id='points'><span>🌟{item?.totalPoints}</span></td>
                    </tr>)
                })}
            </tbody>
            </table>
    </div>
  )
}

export default Leaderboard