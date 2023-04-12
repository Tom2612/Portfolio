import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <>
        <h2 className='card-title'>My Skills</h2>

        <div className='skill'>
            <h3>Web Development</h3>
            <p>
                Being incredibly self-motivated to learn and keep up to date, I make sure I use the best tools available to create 
                full-stack applications.
            </p>
        </div>

        <div className='skill'>
            <h3>Mobile-first</h3>
            <p>
                My projects go for a mobile-first approach. The majority of users will be looking at content on a smaller screen,
                so making sure it looks good regardless of the device is my number one priority!
            </p>
        </div>

        <div className='skill'>
            <h3>Communication</h3>
            <p>
                Making sure I fully understand or that I can explain what I am doing is paramount to the success of my projects. 
                With so many years in education, I can break down concepts and get it accross regarldess of my audience.
            </p>
        </div>
    </>
  )
}
