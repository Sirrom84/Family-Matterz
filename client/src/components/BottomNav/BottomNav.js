import React from 'react';
import './BottomNav.scss';
import { FcInspection } from 'react-icons/fc';
import { FcPlanner } from 'react-icons/fc';
import { FcHome } from 'react-icons/fc';
import { FcShop } from 'react-icons/fc';
import { Link } from 'react-router-dom';
export const BottomNav = () => {
  return (
    <div className='nav'>
      <div className='nav-item'>
        <Link to='/'>
          <FcHome />
        </Link>
      </div>
      <div className='nav-item'>
        <Link to='/calander'>
          <FcPlanner />
        </Link>
      </div>
      <div className='nav-item'>
        <Link to='/todolist'>
          <FcInspection />
        </Link>
      </div>
      <div className='nav-item'>
        <Link to='/grocerylist'>
          <FcShop />
        </Link>
      </div>
    </div>
  );
};
