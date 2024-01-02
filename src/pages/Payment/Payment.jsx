import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuthContext } from '../../hooks/useAuthContext';
import "./Payment.css"
const apiURL = import.meta.env.VITE_BACKEND_URL;

const Payment = () => {
    const paymentInstance = useRef();
    const location = useLocation();
    const { user } = useAuthContext();
    const [payload, setPayload] = useState(null);
    const navigate = useNavigate()
    
    useEffect(() => {
        if(location?.state?.clientToken) {
            document.getElementById('dropin-container').innerHTML = '';
            braintree.dropin.create({
                authorization: location?.state?.clientToken,
                container: document.getElementById('dropin-container'),
                dataCollector: true
                }).then((dropinInstance) => {
                    paymentInstance.current = dropinInstance;
                }).catch((error) => {
                    console.log(error);
            });
        }
    }, [location?.state?.clientToken])

    const handleSubmit = async() => {
        try {
            if(user) {
                if(payload) {
                    const config = {
                        headers: {
                          Authorization: `Bearer ${user?.accessToken}`,
                        },
                    };
                    const id = location?.state?.transactionId;
                    const response = await axios.put(`${apiURL}/userdonation/complete/${id}`, { nonce: payload.nonce, deviceData: payload.deviceData } ,config);
                    if(response && response.status == 200) {
                        toast.success("Donation done successfully !!");
                        setTimeout(() => {
                            navigate("/profile");
                        }, 2000)
                    }
                } else {
                    const payload = await paymentInstance.current?.requestPaymentMethod();
                    setPayload(payload);
                }
            }
        } catch(error) {
            console.log(error)
            toast.error(error?.message)
        }
    }

  return (
    <div id="payment-form">
        <h1>Thank you for your Donation 🥳</h1>
        <p>Thank you from the depths of our hearts for your generous contribution! Your support is instrumental in making our crowdfunding campaign a success. With your donation, we are one step closer to achieving our goal and bringing our project to life. Your belief in our mission inspires us, and we are truly grateful for your commitment to making a positive impact. Together, we're creating something meaningful, and your contribution is a vital part of this journey. Thank you for being a crucial member of our community and for helping us turn dreams into reality!
        </p>
        <br/>
        <p className='warning'>Kindly enter and confirm ypur card details below to continue with the donation. For testing use card number : <b>4111 1111 1111 1111</b></p>
        <div id="dropin-container"></div>
        <button className='primary__btn' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Payment;