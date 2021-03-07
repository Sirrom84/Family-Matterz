import React from 'react';
import { ImBubbles2 } from 'react-icons/im';
import './TopNav.css';

export const TopNav = () => {
  return (
    <div>
      <div className='top-nav'>
        <img src='./images/Logo.png' width='50' height='auto' alt='Logo' />
        <h1 class>The Morris House</h1>
        <ImBubbles2 className='message' />
      </div>
    </div>
  );
};
