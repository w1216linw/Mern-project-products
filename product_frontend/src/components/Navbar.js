import '../styles/navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillAppstore } from 'react-icons/ai'
import { useState } from 'react';
import { useNavContext } from '../contexts/navContext';
import Sidebar from './Sidebar';


const Navbar = () => {

  const [currentPage, setCurrentPage] = useState('home');
  const { openSidebar } = useNavContext();

  return (
    <nav className="navbar">
      <div className='unfold-links'>
        <Link to="/" className={`${currentPage === 'home' ? 'link active' : 'link'}`} onClick={() => setCurrentPage('home')}>Home</Link>
      </div>

      <button className='sidebar-btn' onClick={openSidebar}><AiFillAppstore /></button>

      <Sidebar />
    </nav>
  )
}

export default Navbar;