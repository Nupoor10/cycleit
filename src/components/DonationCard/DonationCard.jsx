import React from 'react'
import { FaEye, FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./DonationCard.css"

const DonationCard = ({id, title, goalAmount, amountRaised, isOrganizer, organizer}) => {

    const navigate = useNavigate();

  return (
    <div className='donation__card__container'>
        <h1>{title}</h1>
        <div className='progress'>
            <p>{(amountRaised/goalAmount) * 100}%</p>
            <p>💸{goalAmount}</p>
        </div>
        <div className='progress__bar'>
            <div style={{width: `${(amountRaised/goalAmount) * 100}%`}}></div>
        </div>
        {!isOrganizer && (
            <div>
                <p className='organizer'>Organizer Name - <img src='https://i.ibb.co/XJMxTWF/Smiling-Girl-Black-for-T-Shirt1.png' alt='user_avatar'></img> &nbsp;{organizer?.username}</p>
                <button className='navigate__btn' onClick={() => {navigate(`/donate/${id}`, { state: { allowDonate: true}})}}>View</button>
            </div>
        )}
        {isOrganizer && (
            <div className='controls'>
                <span className='control__btn' onClick={() => {navigate(`/donate/${id}`, { state: { allowDonate: false}})}}><FaEye /></span>
                <span className='control__btn' onClick={() => {navigate(`/update/${id}`)}}><FaEdit /></span>
            </div>
        )}
    </div>
  )
}

export default DonationCard