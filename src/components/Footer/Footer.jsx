import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__body'>
        <div className='footer__about'>
            <h1>ABOUT</h1>
            <p>
              Empower your sustainable journey with our all-in-one eco-conscious companion! From waste segregation to go-green challenges, earn rewards for positive environmental impact and join a global movement for a greener, cleaner future.
            </p>
        </div>
        <div className='footer__links'>
          <a style={{color: 'white'}} target='_blank' rel='noreferrer' href='https://github.com/Nupoor10'><AiFillGithub /></a>
          <a style={{color: 'white'}} target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/nupoor-shetye-8452111a7/'><AiFillLinkedin /></a>
          <a style={{color: 'white', textDecoration: 'none'}} target='_blank' rel='noreferrer' href='https://peerlist.io/nupoor'>🅿️</a>
        </div>
      </div>
      <hr />
      <div className='footer__copyright'>
        <h3>Copyright @ {new Date().getFullYear()} All Rights Reserved by Cyle♻️IT</h3>
      </div>
    </div>
  )
}

export default Footer
