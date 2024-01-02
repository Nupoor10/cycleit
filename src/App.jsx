import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from './pages/Profile/Profile';
import Challenges from './pages/Challenges/Challenges';
import Recycle from './pages/Recycle/Recycle';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import AddRecycle from './pages/AddRecycle/AddRecycle';
import History from './pages/History/History';
import Donate from './pages/Donate/Donate';
import Campaign from './pages/Campaign/Campaign';
import CreateCampaign from './pages/CreateCampaign/CreateCampaign';
import Payment from './pages/Payment/Payment';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import { useAuthContext } from './hooks/useAuthContext';

function App() {

  const { user } = useAuthContext();

  return (
    <Router>
      { user && <Navbar />}
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/challenge' element={<Challenges />}/>
        <Route path='/recycle' element={<Recycle />}/>
        <Route path='/leaderboard' element={<Leaderboard />}/>
        <Route path='/history' element={<History />}/>
        <Route path='/scan' element={<AddRecycle />}/>
        <Route path='/donate' element={<Donate />}/>
        <Route path='/donate/:id' element={<Campaign />}/>
        <Route path='/create' element={<CreateCampaign />}/>
        <Route path='/update/:id' element={<CreateCampaign />}/>
        <Route path='/payment' element={<Payment />}/>
      </Routes>
      <Footer />
      <Toaster position='top-center'/>
    </Router>
  )
}

export default App
