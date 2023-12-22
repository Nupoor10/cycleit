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
      </Routes>
      <Footer />
      <Toaster position='top-center'/>
    </Router>
  )
}

export default App
