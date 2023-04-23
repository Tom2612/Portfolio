import React from 'react';
import { Link } from 'react-router-dom';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconCopyright } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer>
        <div className='section-top'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
        <div className='section-bottom'>
            <a href='https://www.linkedin.com/in/tom-powell-575864225/'><IconBrandLinkedin size={40} stroke={1}/></a>
            <a href='https://github.com/Tom2612'><IconBrandGithub size={40} stroke={1}/></a>
            <a href='t.powell26@outlook.com'><IconMail size={40} stroke={1}/></a>
        </div>
        <div className='copyright'>
            Copyright <IconCopyright stroke={1} size={12.8}/> 2023 - Thomas Powell
        </div>
    </footer>
  )
}
