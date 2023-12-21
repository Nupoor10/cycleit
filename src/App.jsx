import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from './pages/Profile/Profile';
import Challenges from './pages/Challenges/Challenges';
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
      </Routes>
      <Footer />
      <Toaster position='top-center'/>
    </Router>
  )
}

export default App
