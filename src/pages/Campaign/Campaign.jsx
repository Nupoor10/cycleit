import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuthContext } from '../../hooks/useAuthContext';
import "./Campaign.css"
const apiURL = import.meta.env.VITE_BACKEND_URL;

const Campaign = () => {

  const [donationInfo, setDonationInfo] = useState(null);
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuthContext();

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
                setDonationInfo(response.data.data);
              }
            }
          } catch(error) {
            console.log(error);
            toast.error(error?.message);
          }
    }

    fetchData()
}, [user, id])

  const handleDonate = async() => {
    try {
      if(user && id) {
        const config = {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
          },
        };
        const response = await axios.post(`${apiURL}/userdonation/add`, { donation: id, amount: amount } ,config);
        if(response && response.status == 201) {
          navigate("/payment", {state: {clientToken : response.data.clientToken, transactionId: response.data.data._id}})
        }
      }
    } catch(error) {
      console.log(error);
      toast.error(error?.message);
    }
  }

  const handleChange = (e) => {
    setAmount(e.target.value);
    if(e.target.value <= 0 || e.target.value > donationInfo?.goalAmount - donationInfo?.amountRaised) {
      setError("Please enter a minimum amount greater than 0 and less than funds to be raised")
    } else {
      setError(null)
    }
  }

  return (
    <div className='campaign__page__container'>
      <h1><span onClick={() => navigate(-1)}>⬅️</span>{donationInfo?.title}</h1>
      <p>{donationInfo?.description}</p>
      <p>Goal Amount : {donationInfo?.goalAmount}</p>
      <p>Amount Raised : {donationInfo?.amountRaised}</p>
      <p>Funds to be raised: {(donationInfo?.goalAmount - donationInfo?.amountRaised)}</p>
      <div className='progress'>
            <p>{(donationInfo?.amountRaised / donationInfo?.goalAmount) * 100 }%</p>
            <p>💸{donationInfo?.goalAmount}</p>
        </div>
        <div className='progress__bar'>
            <div style={{width: `${(donationInfo?.amountRaised/donationInfo?.goalAmount) * 100}%`}} ></div>
        </div>
      {(location?.state?.allowDonate === true) && (
        <div>
          <input value={amount} onChange={handleChange} type='text' placeholder='Enter amount to donate'/>
          <button onClick={handleDonate} disabled={amount <= 0 || amount > (donationInfo?.goalAmount - donationInfo?.amountRaised)} className='navigate__btn'>Donate</button>
          {error && <p className='warning'>{error}</p>}
        </div>
      )}
    </div>
  )
}

export default Campaign