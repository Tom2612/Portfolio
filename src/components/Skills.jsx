import React from 'react';
import { IconDeviceDesktop, IconDeviceMobile, IconMessageCircle } from '@tabler/icons-react';

export default function Skills() {
  return (
    <>
        <h2 className='card-title'>My Skills</h2>

        <div className='card-container'>
            <div className='skill'>
                <div className='card-head'>
                    <h3>Web Development</h3>
                    <IconDeviceDesktop size={26} color='#5A88C1'/>
                </div>
                <p>
                    Being incredibly self-motivated to learn and keep up to date, I make sure I use the best tools available to create 
                    full-stack applications. I am fully self-taught, check out my projects.
                </p>
            </div>

            <div className='skill'>
                <div className='card-head'>
                    <h3>Mobile-first</h3>
                    <IconDeviceMobile size={26} color='#5A88C1'/>
                </div>
                <p>
                    My projects go for a mobile-first approach. The majority of users will be looking at content on a smaller screen,
                    so making sure it looks good regardless of the device is my number one priority!
                </p>
            </div>

            <div className='skill'>
                <div className='card-head'>
                    <h3>Communication</h3>
                    <IconMessageCircle size={26} color='#5A88C1'/>
                </div>
                <p>
                    Making sure I fully understand or that I can explain what I am doing is paramount to the success of my projects. 
                    With so many years in education, I can break down concepts and get them accross regardless of my audience.
                </p>
            </div>
        </div>
    </>
  )
}
