import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import '../css/image.css';
import image2 from '../images/IMG-20211109-WA0002.jpg';

export default function Project1() {
    const [emblaRef] = useEmblaCarousel();

  return (
    <div>
        <h2>OpenGroups</h2>
        <div className='project-container'>
            <img src={image2} />
        </div>
        <div>
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
                This is a full CRUD application that incorporates user authentication, RESTful API design and error handling. It is also fully end-to-end tested.
            </p>
            <p>
                I built this because there currently is not such a platform available to cater specifically for musicians and their needs.
                The scope of the project is much larger though, and in the future I hope to expand the reach to choirs, smaller groups and even non-classical musicians.
            </p>
            <div>
                <h4>Technology used: </h4>
                <ul>
                    <li>MERN stack</li>
                    <li>Cypress testing</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
