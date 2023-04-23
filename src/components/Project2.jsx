import React from 'react';
import EmblaCarousel from './EmblaCarousel';
import Collapse from './Collapse';
import '../css/project1.css';
import image1 from '../images/BookReader0.png'
import image2 from '../images/BookReader1.png'
import image3 from '../images/BookReader2.png'
import image4 from '../images/BookReader3.png'

export default function Project2() {
  return (
    <div className='project--container'>
        <h2>Book Reading Tracker</h2>
        <EmblaCarousel images={[image1, image2, image3, image4]}/>
       
        <div className='project--info'>
            <Collapse label='The Project'>
            <p>
                A simple, minimalist platform that allows users to record books and give them ratings.
            </p>
            <p>
                Wislt similar sites exist, they often times feel bloated with extra features that take away from the core aim: Reading.
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
                    <li>MERN stack</li>
                    <li>Deployed on Render</li>
                </ul>
            </div>
            </Collapse>
        </div>
    </div>
  )
}
