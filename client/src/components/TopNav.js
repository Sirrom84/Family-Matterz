import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './TopNav.css';

export const TopNav = () => {
  const items = [
    { icon: 'pi pi-fw pi-home' },
    { icon: 'pi pi-fw pi-calendar-plus' },
    { icon: 'pi pi-fw pi-file' },
    { icon: 'pi pi-fw pi-file' },
    { icon: 'pi pi-shopping-cart' },
  ];

  return (
    <div>
      <div className='top-nav'>
        <TabMenu className='menu-items' model={items} />
      </div>
    </div>
  );
};
