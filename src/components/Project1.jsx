import React from 'react';

import EmblaCarousel from './EmblaCarousel';
import Collapse from './Collapse';
import image1 from '../images/OpenGroups1.JPG';
import image2 from '../images/OpenGroups2.PNG';
import image3 from '../images/OpenGroups3.PNG';
import image4 from '../images/OpenGroups4.PNG';
import image5 from '../images/OpenGroups5.PNG';
import image6 from '../images/OpenGroups6.PNG';
import image7 from '../images/OpenGroups7.PNG';

export default function Project1() {

  return (
    <div className='project--container'>
        <h2><a href='https://github.com/Tom2612/orch-site'>OpenGroups</a></h2>
        <EmblaCarousel images={[image1, image2, image3, image4, image5, image6, image7]}/>
       
        <div className='project--info'>
            <Collapse label='Project'>
            <p>
                The only all-in-one platform that connects amateur and professional musicians to orchestras that need
                vacancies filled in the post-covid landscape.
            </p>
            <p>
                Groups can make a profile, post/update upcoming concerts, their requirements and whether they'll offer financial help to players.
            </p>
            
            <p>
                Players can filter results based on location, instrument and date added. 
            </p>
            <p>
                Check out the <span className='repo-link'><a href='https://github.com/Tom2612/orch-site'>Repo</a></span>.
            </p>
            </Collapse>
            <Collapse label='Inspiration'>
            <p>
                This is a full CRUD application that incorporates user authentication, RESTful API design and error handling. It is also fully end-to-end tested.
            </p>
            <p>
                I built this because currently there is no such platform available to cater specifically to musicians and their needs.
                The scope of the project is much larger though, and in the future I hope to expand the reach to choirs, smaller groups and even non-classical musicians.
            </p>
            </Collapse>
            <Collapse label='Technology'>
            <div>
                <ul>
                    <li>MERN stack</li>
                    <li>Cypress testing</li>
                </ul>
            </div>
            </Collapse>
        </div>
    </div>
  )
}
