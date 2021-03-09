import React from 'react';
import './BottomNav.css';
import { FcInspection } from 'react-icons/fc';
import { FcPlanner } from 'react-icons/fc';
import { FcHome } from 'react-icons/fc';
import { FcShop } from 'react-icons/fc';
export const BottomNav = () => {
  return (
    <div className='nav'>
      <div className='nav-item'>
        <FcHome />
        <span>Home</span>
      </div>
      <div className='nav-item'>
        <FcPlanner />
        <span>Calander</span>
      </div>
      <div className='nav-item'>
        <FcInspection />
        <span>To-Do</span>
      </div>
      <div className='nav-item'>
        <FcShop />
        <span>Pantry</span>
      </div>
    </div>
  );
};
