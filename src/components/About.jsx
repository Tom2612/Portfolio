import React from 'react';
import image2 from '../images/IMG-20211109-WA0002.jpg';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
        <h2 className='card-title'>About me</h2>
        
        <div className='about-container'>
          <div className='image-container'><img src={image2} alt='Profile Photo' /></div>
          <div>
            <p>
              I have been a teacher for 7 years but I am now looking for my next challenge and to change career into web devlopment!
            </p>
            <p>
                I specialise in the MERN stack and follow a test driven approach to my applications. 
                I am always looking for new things to learn to keep up to date with current technologies!
            </p>
            <span className='contact-btn'><Link to='/contact'>Contact me</Link></span>
          </div>
        </div>
    </>
  )
}
