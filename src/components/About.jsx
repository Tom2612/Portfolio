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
              As a teacher of 7 years, learning comes very naturally to me. 
              Whilst working as head of department in one of the most successful international schools in Asia, 
              I started web development as a hobby to 'survive' the strict lockdowns during the COVID-19 pandemic. 
              This very quickly became a passion and something I could see myself doing long-term.
              I am now pursuing a career change into tech.
            </p>
            <p>
                I am now able to build full-stack applications using a test-driven approach.
                With my life-long learner mindset, I am always trying to keep up to date with current technologies and acquire new skills!
            </p>
            <span className='contact-btn'><Link to='/contact'>Contact me</Link></span>
          </div>
        </div>
    </>
  )
}
