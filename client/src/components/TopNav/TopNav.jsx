import React from 'react';
import { Avatar } from 'primereact/avatar';

import './TopNav.scss';

export default function TopNav() {
  return (
    <div>
      <div className='top-nav'>
        <img src='./images/FM-Logo.png' width='auto' height='70px' alt='Logo' />
        <h2>The Morris House</h2>
        <Avatar image='./images/daughter.png' size='large' shape='circle' />
      </div>
    </div>
  );
}
