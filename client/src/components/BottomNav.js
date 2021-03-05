import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './BottomNav.css';

export const BottomNav = () => {
  const items = [
    { icon: 'pi pi-fw pi-home' },
    { icon: 'pi pi-fw pi-calendar-plus' },
    { icon: 'pi pi-fw pi-file' },
    { icon: 'pi pi-fw pi-file' },
    { icon: 'pi pi-shopping-cart' },
  ];

  return (
    <div>
      <div className='nav'>
        <TabMenu className='menu-items' model={items} />
      </div>
    </div>
  );
};
