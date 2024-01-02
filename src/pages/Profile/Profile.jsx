import React, { useEffect, useState } from 'react'
import { LuBadgeHelp } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';
import Modal from '../../components/Modal/Modal';
import BadgeCard from '../../components/BadgeCard/BadgeCard';
import BadgeInfo from '../../components/BadgeInfo/BadgeInfo';
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard';
import UserCharts from '../../components/UserCharts/UserCharts';
import DonationCard from '../../components/DonationCard/DonationCard';
import "./Profile.css";
const apiURL = import.meta.env.VITE_BACKEND_URL;

const Profile = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [userStats, setUserStats] = useState([]);
    const [userChallenges, setUserChallenges] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [myDonations, setMyDonations] = useState(null);
    const [donationInfo, setDonationInfo] = useState([]);
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };

    useEffect(() => {
      const fetchData = async() => {
        try {
          if(user) {
            const config = {
              headers: {
                Authorization: `Bearer ${user?.accessToken}`
              }
            };
            const response = await axios.get(`${apiURL}/user/stats`, config);
            if (response && response.status === 200 && response.data.data) {
              setUserStats(response.data.data);
            }
          }
        } catch(error) {
          console.log(error);
          toast.error(error?.message);
        }
      }

      fetchData();
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
    }, [user]);

    useEffect(() => {
      const fetchData = async() => {
          try {
              if(user) {
                const config = {
                  headers: {
                    Authorization: `Bearer ${user?.accessToken}`,
                  },
                };
                const response = await axios.get(`${apiURL}/donation/created/`, config);
                if(response && response.status == 200) {
                  setMyDonations(response.data.data);
                }
              }
            } catch(error) {
              console.log(error);
              toast.error(error?.message);
            }
      }
  
      fetchData()
    }, [user])

    useEffect(() => {
      const fetchData = async() => {
          try {
              if(user) {
                const config = {
                  headers: {
                    Authorization: `Bearer ${user?.accessToken}`,
                  },
                };
                const response = await axios.get(`${apiURL}/userdonation/all`, config);
                if(response && response.status == 200) {
                  setDonationInfo(response.data.data);
                }
              }
            } catch(error) {
              console.log(error);
              toast.error(error?.message);
            }
      }
  
      fetchData()
    }, [user])

  return (
    <div className='profile__page__container'>
        <div className='profile__headline margin'>
          <h1>Welcome, {user?.name} 🥷</h1>
          <p>Turn every action into a green victory, start now!</p>
          <UserCharts />
        </div>
        <div className='margin'>
          <button className='primary__btn' onClick={() => {navigate("/recycle")}}>Start Recycling ♻️</button>
        </div>
        <div className='margin'>
          <h1>Awards</h1>
          <p style={{fontSize: '22px'}}>Your total points earned:  <span>{userStats?.totalPoints} 🌟</span></p>
          <div>
            <h2>Badges &nbsp; <LuBadgeHelp cursor={'pointer'} onClick={openModal} /></h2>
            <div>
              {userStats?.badges !== 0 ? (
                <>{
                  userStats.badges?.map((item, index) => {
                    return <BadgeCard key={index} name={item.name} points={item.points} img={item.img}/>
                  })
                }</>
              ) : "You have earned 0 badges! Earn points to get rewarded!!"}
            </div>
          </div>
        </div>
        <div className='margin'>
          <h1>Your Challenges </h1>
          <div className='challenges__div__container'>
            {(userChallenges.length > 0) ? userChallenges?.map((item,index) => {
                return <ChallengeCard key={index} title={item.challenge.title} description={item.challenge.description} difficultyLevel={item.challenge.difficultyLevel} points={item.challenge.points} id={item._id} isEnrolled={true} isCompleted={item.completed}/>
              }) : "You haven't enrolled in any challenges yet.Explore Below !!"}
          </div>
        </div>
        <div className='margin'>
          <h1>Your Donations</h1>
          <button className='primary__btn' onClick={() => {navigate("/donate")}}>Explore Donations 🎁</button>
          <div className='user__donations'>
            {donationInfo?.map((item, index) => {
            return (
              <div  key={index}>
                <h1>{item?.donation?.title}</h1>
                <h2>You donated: Rs.{item?.amount}💸</h2>
                <p>You helped raise {(item?.amount / item?.donation?.goalAmount) * 100} % of the goal amount 💪🏼</p>
              </div>
              )
            })}
          </div>
        </div>
        <div className='margin'>
          <h1>Your Campaigns </h1>
          <button className='primary__btn' onClick={() => {navigate("/create")}}>Create Campaign 💹</button>
          <div className='donations__wrapper'>{myDonations?.map((item) => {
          return <DonationCard key={item._id} id={item._id} title={item?.title} description={item.description} goalAmount={item.goalAmount} amountRaised={item.amountRaised} organizer={item.organizer} isOrganizer={true}/>
          })}</div>
        </div>
        <Modal isOpen={modalIsOpen} closeModal={closeModal} 
        children={<BadgeInfo />}/>
    </div>
  )
}

export default Profile