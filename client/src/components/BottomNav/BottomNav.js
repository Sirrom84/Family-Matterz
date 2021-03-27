import React from 'react';
import './BottomNav.scss';
import { GoTasklist } from 'react-icons/go';
import { FaCalendarDay } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export const BottomNav = () => {
  return (
    <div className='nav'>
      <div className='nav-item'>
        <Link to='/'>
          <FaHome />
        </Link>
      </div>
      <div className='nav-item'>
        <Link to='/calender'>
          <FaCalendarDay />
        </Link>
      </div>
      <div className='nav-item'>
        <Link to='/todolist'>
          <GoTasklist />
        </Link>
      </div>
      <div className='nav-item'>
        <Link to='/grocerylist'>
          <FaShoppingBasket />
        </Link>
      </div>
    </div>
  );
};
