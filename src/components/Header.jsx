import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <nav>
      <h1>Tom Powell</h1>
      <div className='desktop-view'>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='desktop-hide'>
        
      </div>
    </nav>
  )
}
