import React, { useState } from 'react';
import './Header.css';
import { IconX, IconMenu2 } from '@tabler/icons-react';

export default function Header() {
  const [menu, setMenu] = useState(false);

  const handleMenuControl = () => {
    setMenu(prev => !prev);
    console.log(menu);
  }

  return (
    <nav>
      <div className='desktop-view'>
        <h1>Tom Powell</h1>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className='desktop-hide'>
        <div className='open' onClick={handleMenuControl}>
          <IconMenu2 size={40} stroke={1}/>
        </div>

        <div className='menu'>
          <div className='close'>
            <IconX size={40} stroke={1}/>
          </div>
          <h1>Tom Powell</h1>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
