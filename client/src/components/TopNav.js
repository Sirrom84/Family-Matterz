import React from 'react';
import { ImBubbles2 } from 'react-icons/im';
import './TopNav.css';

export const TopNav = () => {
  return (
    <div>
      <div className='top-nav'>
        <img src='./images/FM-Logo.png' width='auto' height='70px' alt='Logo' />
        <h2>The Morris House</h2>
        <ImBubbles2 className='message' />
      </div>
    </div>
  );
};
