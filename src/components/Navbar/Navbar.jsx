import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { HiOutlineLogout } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";
import { useAuthContext } from '../../hooks/useAuthContext';
import './Navbar.css'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false)
    const { user, dispatch } = useAuthContext();
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    };
  
    const handleUserDropdown = () => {
      setShowUserDropdown(!showUserDropdown)
    };

    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
      window.location.href = '/';
    };

    const navlinks = [
        {name: 'Challenges', path: '/challenge'},
        {name: 'Recycle', path: '/recycle'},
        {name: 'History', path: '/history'},
        {name: 'Leaderboard', path: '/leaderboard'},
        {name: 'Scan', path: '/scan'}
    ]
  
    return (
      <nav className="navbar__wrapper">
        <div className="navbar__container">
          <div className="logo__icon" onClick={() => {navigate("/home")}}>Cyle♻️IT</div>
          <div className='navbar__content'>
              <div className={`navbar__elements ${showNavbar && 'active'}`}>
              <ul>
                {navlinks.map((item, index) => {
                  return <li key={index}><NavLink to={item.path}>{item.name}</NavLink></li>
                })}
              </ul>
              </div>
              <div className="menu__icon" onClick={handleShowNavbar}>
                {showNavbar ? <ImCancelCircle /> : <GiHamburgerMenu />}
              </div>
              <div className="user__dropdown">
              <span onClick={handleUserDropdown}><FaCircleUser /></span>
                {showUserDropdown && (
                  <div className="user__dropdown__content">
                    <NavLink to="/profile">My Impact</NavLink>
                    <NavLink onClick={handleLogout}>Logout <HiOutlineLogout /></NavLink>
                  </div>
                )}
              </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar