import React from 'react';
import { ImBubbles2 } from 'react-icons/im';
import { Link } from 'react-router-dom';

import './TopNav.scss';

export const TopNav = () => {
  return (
    <div>
      <div className='top-nav'>
        <img src='./images/FM-Logo.png' width='auto' height='70px' alt='Logo' />
        <h2>The Morris House</h2>
        <Link to='/chat'>
          <ImBubbles2 className='message' />
        </Link>
      </div>
    </div>
  );
};
