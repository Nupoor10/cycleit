import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useAuthContext } from '../../hooks/useAuthContext'
import DonationCard from '../../components/DonationCard/DonationCard'
import './Donate.css'
const apiURL = import.meta.env.VITE_BACKEND_URL;

const Donate = () => {

    const [donations, setDonations] = useState([])
    const navigate = useNavigate()
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchData = async() => {
            try {
                if(user) {
                  const config = {
                    headers: {
                      Authorization: `Bearer ${user?.accessToken}`,
                    },
                  };
                  const response = await axios.get(`${apiURL}/donation/all/`, config);
                  if(response && response.status == 200) {
                    setDonations(response.data.data);
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
    <div className='donation__page__container'>
        <h1>Explore Donations 💰</h1>
        <button className='primary__btn' onClick={() => {navigate("/create")}}>Create Campaign 💹</button>
        <div className='donations__wrapper'>{donations?.map((item) => {
          return <DonationCard key={item._id} id={item._id} title={item?.title} description={item.description} goalAmount={item.goalAmount} amountRaised={item.amountRaised} organizer={item.organizer} isOrganizer={false}/>
        })}</div>
    </div>
  )
}

export default Donate