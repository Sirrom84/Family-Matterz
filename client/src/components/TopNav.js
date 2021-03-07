import React from 'react';
import 'primeicons/primeicons.css';
import './TopNav.css';

export const TopNav = () => {
  return (
    <div>
      <div className='top-nav'>
        <img src='./images/Logo.png' width='70' height='auto' alt='Logo' />
        <h1 class>The Morris House</h1>
        <i className='pi pi-envelope p-mr-2 p-text-secondary p-overlay-badge'></i>
      </div>
    </div>
  );
};
