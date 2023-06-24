import React from 'react';
import EmblaCarousel from './EmblaCarousel';
import Collapse from './Collapse';

import image1 from '../images/BookReader0.PNG';
import image2 from '../images/BookReader1.PNG';
import image3 from '../images/BookReader2.PNG';
import image4 from '../images/BookReader3.PNG';
import image5 from '../images/BookReader4.PNG';

export default function Project2() {
  return (
    <div className='project--container'>
        <h2><a href='https://bookreadingtracker.onrender.com/login'>Book Reading Tracker</a></h2>
        <EmblaCarousel images={[image1, image2, image3, image4, image5]}/>
       
        <div className='project--info'>
            <Collapse label='Project'>
            <p>
                A simple, minimalist platform that allows users to record books and give them ratings.
            </p>
            <p>
                Whislt similar sites exist, they often feel bloated with extra features that take away from the core aim: Reading.
            </p>
            <p>
                Check out the <span className='repo-link'><a href='https://github.com/Tom2612/BookReadingMERN'>Repo</a></span>.
            </p>
            </Collapse>
            <Collapse label='Inspiration'>
            <p>
                I built this primarily to support younger readers with its ease of use and simple design.
            </p>
            <p>
                This project is currently deployed and has users!
            </p>
            </Collapse>
            <Collapse label='Technology'>
            <div>
                <ul>
                    <li>MongoDB</li>
                    <li>Node/Express</li>
                    <li>React (Vite)</li>
                    <li>MantineUI</li>
                    <li>Deployed on Render</li>
                </ul>
            </div>
            </Collapse>
        </div>
    </div>
  )
}
