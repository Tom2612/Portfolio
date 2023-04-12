import React, { useState } from 'react';
import './Header.css';
import { IconX, IconMenu2 } from '@tabler/icons-react';

export default function Header() {
  // const [menu, setMenu] = useState(false);
  const [visible, setVisible] = useState('hide');

  const handleMenuControl = () => {
    if (visible === 'hide') {
      setVisible('show');
    } else {
      setVisible('hide');
    }
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
          <IconMenu2 size={40} stroke={2} color='#C9EBF9'/>
        </div>

        <div className={`menu ${visible}`}>
          <div className='close' onClick={handleMenuControl}>
            <IconX size={40} stroke={1} color='#C9EBF9'/>
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
